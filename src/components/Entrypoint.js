import React from "react";
import {Link, Outlet } from 'react-router-dom';
import '/Users/aaronrobins/Downloads/react-google-login-master/src/index.css'


const Entrypoint = () => {
    return (
        <div className = 'container-middle' >
        <h1>Homepagedetails</h1>
        <Link className = 'button2' to='/home'>Enter</Link>
        </div>

    )
}

export default Entrypoint;

