import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {

  const [user, setUser] = useState(
    localStorage.getItem('userData') ? localStorage.getItem('userData') : null
  )

  const navigate = useNavigate();

  const login = async (data) => {
    data = true
    setUser(data);
    localStorage.setItem('userData', data)
    navigate('/')
  }

  const logout = () => {
    localStorage.removeItem('userData')
    setUser(null)
    
  }

  return (
    <div>
      <Navbar user={user} logout={logout} />
      <Routes>
        <Route path='/' element={<HomePage user={user}  />} />
        <Route path='/Login' element={<LoginPage login={login}  />} />
      </Routes>
    </div>

  );
}

export default App;
