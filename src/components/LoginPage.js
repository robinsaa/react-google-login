import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import '../App.css'
import { useState } from 'react';

function LoginPage(props) {


    const [userName, setUserName] = useState('');

    const handleUserNameChange = event => {
        setUserName(event.target.value);
        console.log(event)
        console.log(userName)
    }

    const [pass, setPass] = useState('');

    const handlePassChange = event => {
        setUserName(event.target.value);
        console.log(event)
        console.log(userName)
    }

    return (
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className="col col-md-6">
                    <div className="card login-card">
                        <form className='box login-box'>
                            <h1>Login</h1>
                            <p className="text-muted"> Please enter your login and password!</p>
                            <input type="text" onChange={handleUserNameChange} placeholder="Username"/>
                            <input type="password"  placeholder="Password"/>
                            <a className="forgot text-muted" href="#">Forgot password?</a>
                            <input type="submit" onClick={props.login} value="Login" href="#" />
                            <div className='row justify-content-md-center' ><GoogleLogin
                                    clientId="706190860947-v0k1rh5m3dvhntrh5nb7k9vov85bgrb6.apps.googleusercontent.com"
                                    render={renderProps => (
                                        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
                                      )}
                                    buttonText="Log in with Google"
                                    onSuccess={props.login}
                                    onFailure={err => console.log('fail', err)}
                                    cookiePolicy={'single_host_origin'}
                                    theme='dark'
                                    >
                                </GoogleLogin></div>    
                                
                                
                            <div className="col-md-12">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;