import React, { Component } from 'react';
import '../assets/css/avatar_select.css';
import SimpleSlider from './carousel';
import logo from '../assets/images/stand_app_logo.png';

class Avatar extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (

            <div className='container-fluid'>
                <div className='text-center'>
                    <img src={logo} className='logo-avatar'/>
                </div>
                <hr/>
                <p className="avatar-select-title text-center">Select your avatar</p>     
                <SimpleSlider/>

            </div>

        )
    }
}

export default Avatar;