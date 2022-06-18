import React from 'react';



export default function HomePage(props) {

    const user = props.user;
 
    return (    
    
    <div>
        <h1>{props.user ? "signed in" : "not signed in"}</h1>
        
      
    </div>


  )
}
