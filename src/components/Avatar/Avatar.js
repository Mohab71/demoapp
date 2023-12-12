/* eslint-disable no-unused-vars */
import React from 'react'
import './Avatar.css'
import Avatarlist from './Avatarlist/Avatarlist';
import { useState, useEffect } from 'react';



function Avatar() {
    const [showList, setShowList] = useState(false);

    const handleClick = () => {
        setShowList(!showList)
    }
    
    
    return (
        <>
            <img 
            className=  "avatar"
            src="https://w7.pngwing.com/pngs/799/987/png-transparent-computer-icons-avatar-social-media-blog-font-awesome-avatar-heroes-computer-wallpaper-social-media-thumbnail.png" 
            alt="Avatar"
            onClick={() => {handleClick()}}
        />

            {showList &&   <Avatarlist showList={showList} setShowList={setShowList} handleClick={handleClick}/>
 }
        </>
    )
}

export default Avatar