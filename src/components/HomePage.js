import React from 'react';

export default function HomePage(props) {

    const user = props.user;

    return (
        <div>
            
            <h1>{props.user ? "Name: " + user.name : "not signed in"}</h1>
            <h1>{props.user ? "Name: " + user.email : null}</h1>
        </div>
    )
}
