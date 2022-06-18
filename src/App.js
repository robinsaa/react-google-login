import logo from './logo.svg';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import { createContext,useState } from 'react';


function App() {

  

  const [user, setUser] = useState(
    localStorage.getItem('userData') ? localStorage.getItem('userData') : null
   
  )


  const login = async (data) => {
    data = true
    setUser(data);
    localStorage.setItem('userData', data)
  }

  const logout = () => {
    localStorage.removeItem('userData')
    setUser(null)

  }

  
  return (
    

    <Routes>
      <Route path='/' element = {<HomePage user = {user} login={login} logout={logout}/>} />
      <Route path='/Login' element = {<LoginPage />} />
    </Routes>
    
   
    
   
  );
  

}
  



export default App;
