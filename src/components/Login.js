import { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

function Login () {

    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
          ? JSON.parse(localStorage.getItem('loginData'))
          : null
      );
    
    
      const handleLogin = async (googleData) => {
        console.log(googleData);
        const res = await fetch('/api/google-login', {
          method: 'POST',
          body: JSON.stringify({
            token: googleData.credential,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        const data = await res.json();
        setLoginData(data);
        localStorage.setItem('loginData', JSON.stringify(data));
      };
    
      const handleFailure = (response) => {
        console.log(response);
        console.log("failure");
        alert(response);
      };
    
      const handleLogout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null);
      };

    return (
        <div className="App">
        <header className="App-header">
          <div>
            {loginData ? (
              <div>
                <h3>You logged in as {loginData.email}</h3>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <GoogleLogin
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
                type= "standard"
                text="signin_with">
              </GoogleLogin>
            )}
          </div>
        </header>
      </div>

    );


}

export default Login;