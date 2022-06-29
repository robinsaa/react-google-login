import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Portal } from './components/Portal';
import ProtectedRoute from './hoooks/ProtectedRoute'
import { Purchase } from './components/Purchase';

function App() {

  const apiURL = 'https://precious-api-test.herokuapp.com';

  const [user, setUser] = useState(
    localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null
  )

  const [holdings, setHoldings] = useState([1,2,3])


  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('userData')
    setUser(null)
    navigate('/')
  }

  const handleOrder = () => {
    holdings.push(5)
  }
  
  const handleLogin = async (googleData) => {
    console.log(googleData)
    //fetch auth details from google-api

    console.log(`${process.env.API_URL ? process.env.API_URL:''}/login`)
    const res = await fetch(`${apiURL}/login`, {
      method: 'POST',
      body: JSON.stringify({
        logintype: 'google',
        token: googleData.credential,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //save response
    const data = await res.json();
    const status = await res.status;
    
    //handle success or failure
    if (status == '401') {alert("user does not exist")} 
    else {
    setUser(data);
    localStorage.setItem('userData', JSON.stringify(data));
    navigate('/portal') }
  };

  const handleFailure = (response) => {
    console.log(response);
    console.log("failure");
    alert(response);
  };

  return (
    <GoogleOAuthProvider  clientId="706190860947-v0k1rh5m3dvhntrh5nb7k9vov85bgrb6.apps.googleusercontent.com">
      <div className='App'>
        <Navbar user={user} logout={logout} />
        <Routes>
          <Route path='/' element={<HomePage user={user} />} />
          <Route path='/Login' element={!user ? <LoginPage login={handleLogin} /> : <Navigate to = '/'></Navigate>} />
          <Route element={<ProtectedRoute user={user} />}>
            <Route path='/portal' element={<Portal user={user} holdings={holdings} />} />
              <Route path='/portal/invest' element={<Purchase handleOrder = {handleOrder} />} />
          </ Route>
        </Routes>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
