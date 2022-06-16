import './App.css';
import { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {


  return (
    <GoogleOAuthProvider clientId="706190860947-v0k1rh5m3dvhntrh5nb7k9vov85bgrb6.apps.googleusercontent.com">
      <Router >
        <div className="container">
          <header>
            <ul>
              <li><Link to="/login">Login</Link></li>
            </ul>
            <div>
              <Routes>
                <Route exact path="/login" element={<Login />} />
              </Routes>
            </div>
          </header>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
