import React from 'react';
import avatar from '../assets/images/avatars/10kevinSoccer.jpg';
import defaultAvatar from '../assets/images/avatars/default_avatar.png';
import '../assets/css/header.css';

import {Link} from 'react-router-dom';
import LoginConditional from './loginConditional';
import Hamburger from './hamburger';
import { slide as Menu } from 'react-burger-menu'
import Logo from './logo';


class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            avatar: ''
        }
    }
    showSettings (event) {
        event.preventDefault();
    }
    
    logOut () {
        localStorage.removeItem('token');
    }

    checkAvatar () {
        let token = localStorage.getItem('token');
        if(!token || token === 'undefined') {
            this.setState({
                avatar: {defaultAvatar}
            })
        } else {
            // this.setState({
            //     avatar: this.props.avatar
            // })
            return
        }
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
                            <img alt="Avatar" src={this.state.avatar} className="img-fluid avatar_image" />
                        </Link>
                        <a id="home" className="menu-item" href="/posts">My Account</a>
                        <a id="about" className="menu-item" href="/avatar_select">Avatar Select</a>
                        <a id="contact" className="menu-item" href="/about">About Us</a>
                        <a id="contact" className="menu-item" href="/login" onClick={this.logOut.bind()}>Log Out</a>
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