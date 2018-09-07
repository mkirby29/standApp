import React from 'react';
import avatar from '../assets/images/avatars/10kevinSoccer.jpg';
import '../assets/css/header.css';

import {Link} from 'react-router-dom';
import LoginConditional from './loginConditional';
import Hamburger from './hamburger';
import { slide as Menu } from 'react-burger-menu'
import Logo from './logo';


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
                <div className="navBar d-flex justify-content-between">
                    {/* <div className="side-menu"> */}
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
                    {/* </div> */}
                    <div className='logo'>
                        <Logo/>
                    </div>
                </div>
                <hr className="white"/>
            </div>
        )
    } else {
        return (
            <div className="container-fluid">
                <div className="navBar d-flex justify-content-between">
                    <div className="back_button">
                        <Link to='/'>
                            <i className="fas fa-chevron-left fa-2x"/>
                        </Link>   
                    </div>
                    <div className='logo'>
                        <Logo/>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }}

}

export default Header;