import React from 'react'
import { useNavigate } from "react-router-dom";

function LoginPage(props) {

    const user = props.user
    console.log(user)
    const navigate = useNavigate()
    



  
return (
    <> 
    <div>LoginPage</div>
    {!user ? <button onClick={props.login}>login</button> : null}

    </>
  )
}

export default LoginPage