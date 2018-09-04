import React from 'react';
import avatar from '../assets/images/avatars/10kevinSoccer.jpg';
import logo from '../assets/images/stand_app_logo.png';
import '../assets/css/header.css';

import {Link} from 'react-router-dom';
import LoginConditional from './loginConditional'

function Header (props) {
    var currentLocation = window.location.href;
    var result = /[^/]*$/.exec(currentLocation)[0]
    if (result === '') {
        return (
            <div className="container-fluid">

                <div className="navBar row">
                    <div className="profile_icon col-3">
                        <Link to='/posts'>
                            <img alt="Avatar" src={avatar} className="img-fluid avatar_image" />
                        </Link>
                    </div>
                    <div className="logo col-4 offset-1 text-center">
                        <Link to='/avatar_select'>
                            <img src={logo} alt="Logo" className="img-fluid" />
                        </Link>
                    </div>
                    {/* <LoginConditional/> */}
                </div>
                <hr className="white"/>
            </div>
        )
    } else {
        return (
            <div className="container-fluid">

                <div className="navBar row">
                    <div className="back_button col-2">
                        <Link to='/'>
                            <i className="fas fa-chevron-left fa-2x"></i>
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
}

export default Header;