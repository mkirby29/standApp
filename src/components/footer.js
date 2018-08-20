import React from 'react';
import '../assets/css/footer.css';
import Microphone from './microphone';
import {Link} from 'react-router-dom';

function Footer (props) {
    return (
        <div>
            {/* grey background for footer */}
            <div className="footer text-center">

            </div>
        
            {/* seperate layer, so microphone image doesn't fade with background opacity */}
            <div className="footer_mic text-center">
                <Link to='/recording'>
                    <span className='fa-stack fa-2x'>
                        <i className="far fa-circle fa-5x fa-stack-2x"></i>
                        <i className="fas fa-microphone fa-lg fa-stack-1x fa-inverse"></i>
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Footer;