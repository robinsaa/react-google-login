import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(props) {
  
    const user = props.user;
  
    return (
    
<nav>
  <ul>
   
    <li><a >Item 2</a></li>
    <li><a >Item 3</a></li>
    {user ? <NavLink to = '/'onClick={props.logout}>LOGOUT</NavLink> : <li><NavLink to = '/login'>login</NavLink></li> }
  </ul>
</nav>
  )
}

export default Navbar

