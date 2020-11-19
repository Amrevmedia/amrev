import React from 'react';
import "./Header.css"; 
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from "@material-ui/core";
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <h1>Logo</h1>

            </div>

            <div className="header__middle">
                <div className="header__input">
                <SearchIcon />
                <input type="text" />
                </div>
            
            </div>

            <div className="header__right">
                <div className="header__info">
                   <h2>Setting</h2>
                   <h2>Help</h2>
                   <h2>Notification</h2>
                    <Avatar />
                </div>
                
            </div>
            
        </div>
    );
}

export default Header
