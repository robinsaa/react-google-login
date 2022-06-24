import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

function Navbar(props) {

    const user = props.user;

    return (
        <nav className='navbar navbar-expand-md fixed-top '>
            <a className='navbar-brand' href='/'>Precious</a>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'><i className='fas fa-bars hamburger'></i></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarText'>
                <ul className='navbar-nav mr-auto nav'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/'>HOME</NavLink>
                    </li>
                    {user ?
                    <>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/portal'>VAULT</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/portal/invest'>INVEST</NavLink>
                    </li>
                    </> :null}
                </ul>
                <ul className='navbar-right navbar-nav nav'>
                {user ?
                    <>
                    <li className='nav-item'>
                        <NavLink onClick={props.logout} className='nav-link' to='/'>LOGOUT</NavLink>
                    </li></> :
                    <li className='nav-item'>
                        <NavLink className='nav-link nav' to='/login'>LOGIN</NavLink>
                    </li>}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

