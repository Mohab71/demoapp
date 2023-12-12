
/* eslint-disable no-unused-vars */
import React from 'react'
import './Avatarlist.css'
import { useState, useEffect } from 'react';

function Avatarlist({showList,setShowList, handleClick}) {

    const listData = ["Item 1","Item 2","Item 3"];
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.avatar') && !event.target.closest('.avatar__list')) {
                setShowList(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [setShowList]);

    return (
        <div className="avatarlist"> 
        {/* // Render the list only when showList is true */}
            <ul>
            {listData.map((item, index) => (
                <li key={index}>
                {item}
                </li>
            ))}
            </ul>
        </div>
        
    )
}

export default Avatarlist