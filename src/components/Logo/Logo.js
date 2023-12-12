import React from 'react'
import { Link } from 'react-router-dom';
import './Logo.css'

function Logo() {
    return (
            <Link to="/">
                <img  className='logo' alt='' src='logo.png'></img>
            </Link>
    )
}

export default Logo
