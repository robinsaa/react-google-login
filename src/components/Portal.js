import React from 'react'
import { NavLink } from 'react-router-dom';

export const Portal = (props) => {
    
    const user = props.user;

    return (
        <div className="container">

            <h1>{props.user ? "Name: " + user.name : "not signed in"}</h1>
            <h1>{props.user ? "Name: " + user.email : null}</h1>
            <li >
                <NavLink to='/portal/invest'>Invest</NavLink>
            </li>
            {/* <button disabled = {oneOffButton} onClick={handleOneOff} to='/portal/invest'>One time investment</button>
            <button disabled = {reacurringButton} onClick={handleReacurring}>user select</button> */}
            
        </div>
    )
}
