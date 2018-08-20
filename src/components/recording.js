import React from 'react';
import Microphone from './microphone';
import '../assets/css/recording.css';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <div id='recording_page' className="container">
            <Link to='/'><i className="fas fa-chevron-left fa-lg"></i></Link>
            <Microphone />
        </div>
    )
}