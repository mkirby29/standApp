import React, { Component } from 'react';
import '../assets/css/avatar_select.css';
import Dj from '../assets/images/avatars/2brettDj.jpg';
import Tuba from '../assets/images/avatars/4codyTuba.jpg';
import Piano from '../assets/images/avatars/6erinPiano.jpg';
import Planet from '../assets/images/avatars/7frankPlanet.jpg';
import Rapper from '../assets/images/avatars/8jennaRapper.jpg';
import Reading from '../assets/images/avatars/9katReading.jpg';
import Soccer from '../assets/images/avatars/10kevinSoccer.jpg';
import Jedi from '../assets/images/avatars/12sarahJedi.jpg';
import Celebrity from '../assets/images/avatars/16nateCelebrity.jpg';
import Sax from '../assets/images/avatars/sax.jpg';
import SimpleSlider from './carousel';
import { Link } from 'react-router-dom';

class Avatar extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (

            <div className='container-fluid'>
                <div>
                    <p className="display-2 text-center">Select Avatar</p>     
                </div>
                <div>
                    <SimpleSlider/>
                </div>
            </div>

        )
    }
}

export default Avatar;