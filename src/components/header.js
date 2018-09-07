import React from 'react';
import avatar from '../assets/images/avatars/10kevinSoccer.jpg';
import logo from '../assets/images/stand_app_logo.png';
import '../assets/css/header.css';

import {Link} from 'react-router-dom';
import LoginConditional from './loginConditional';
import Hamburger from './hamburger';
import { slide as Menu } from 'react-burger-menu'


class Header extends React.Component {
    constructor(props){
        super(props);
    }
    showSettings (event) {
        event.preventDefault();
      }

    render(){
        var currentLocation = window.location.href;
        var result = /[^/]*$/.exec(currentLocation)[0];

        if (result === '') {
        return (
            <div className="container-fluid">

                <div className="navBar row">
                    <div className="profile_icon col-3">
                    <Menu>
                        <Link to='/posts'>
                            <img alt="Avatar" src={avatar} className="img-fluid avatar_image" />
                        </Link>
                        <a id="home" className="menu-item" href="/posts">My Account</a>
                        <a id="about" className="menu-item" href="/avatar_select">Avatar Select</a>
                        <a id="contact" className="menu-item" href="/about">About Us</a>
                        <a id="contact" className="menu-item" href="/login">Log Out</a>
                        <a onClick={ this.showSettings } className="menu-item--small" href=""></a>
                    </Menu>


                      
                    </div>
                    {/* <div className="logo col-4 offset-1 text-center">
                        <Link to='/avatar_select'>
                            <img src={logo} alt="Logo" className="img-fluid" />
                        </Link>
                    </div> */}
                    {/* <div className = "col-3 pull-md-right pull-xl-right pull-lg-right pull-sm-right pull-xs-right">
                        <LoginConditional/>
                    </div> */}
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
          
                </div>
                <hr/>
            </div>
        )
    }}

}

export default Header;