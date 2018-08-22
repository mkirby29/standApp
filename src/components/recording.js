import React from 'react';
import Microphone from './microphone';
import '../assets/css/recording.css';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <div id='recording_page' className="container">
            <Link to='/'><i className="fas fa-chevron-left fa-2x col-1 text-center"></i></Link>
            <Microphone />
        </div>
    )
}
