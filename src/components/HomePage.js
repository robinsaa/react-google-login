import React from 'react';


export default function HomePage(props) {

    const user = props.user1;
 
    return (    
    
    <div>
        <h1>{props.user ? "signed in" : "not signed in"}</h1>
        <button onClick={props.logout}>logout</button>
        <button onClick={props.login}>login</button>
    </div>


  )
}
