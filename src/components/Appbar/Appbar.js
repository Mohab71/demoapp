/* eslint-disable no-unused-vars */
import React from 'react'
import './Appbar.css'
import Logo from '../Logo/Logo'
import Avatar from '../Avatar/Avatar'

function Appbar() {
    return (
        <div className='appbar'>
            <div className="logo-container">
                <Logo />
            </div>
            <div className='products'>
            <sapn className="appbar__products">products</sapn>
            <sapn className="appbar__pricing">pricing</sapn>
            <sapn className="appbar__avatar">avatar</sapn>
            </div>

            <div className="avatar__container">
                <Avatar />
            </div>
            
        </div>
    )
}

export default Appbar