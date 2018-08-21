import React from 'react';
import avatar from '../assets/images/avatar.png';
import logo from '../assets/images/logo.jpg';
import '../assets/css/header.css';

import {Link} from 'react-router-dom';

function Header (props) {
    return (
        <div className="container-fluid">
        
        <div className="back_button left">
                <Link to='/avatar_select'>
                    <ion-icon name="ios-arrow-back" size="large"></ion-icon>
                </Link>
            </div>

            <div className="navBar row">
            <div className="profile_icon col-2">
                <Link to='/posts'>
                    <img alt="Avatar" src={avatar} className="img-fluid avatar_image" />
                </Link>   
            </div>
            <div className="logo col-4 offset-2 text-center">
                <Link to='/'>
                    <img src={logo} alt="Logo" className="img-fluid" />
                </Link>
            </div>
            </div>
            <hr/>
        </div>
    )
}

export default Header;