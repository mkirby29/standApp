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
                    <ion-icon name="microphone" size="large"></ion-icon>
                </Link>
            </div>
        </div>
    )
}

export default Footer;