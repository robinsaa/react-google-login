import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import '../App.css'

function LoginPage(props) {

    const user = props.user    
  
    return (
        <div className = 'vertical-center'> 
        <div >LoginPage</div>
        {!user ? <GoogleLogin 
                    buttonText="Log in with Google"
                    onSuccess={props.login}
                    onFailure={err => console.log('fail', err)}
                    cookiePolicy={'single_host_origin'}
                    type= "standard"
                    text="signin_with">
                </GoogleLogin> : null}

        </div>
    )
}

export default LoginPage