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

import { Link } from 'react-router-dom';

class Avatar extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        var avatarArray = {
            data: [
                {name: 'Dj', src: Dj, id: '001'},
                {name: 'Tuba', src: Tuba, id: '002'},
                {name: 'Piano', src: Piano, id: '003'},
                {name: 'Planet', src: Planet, id: '004'},
                {name: 'Rapper', src: Rapper, id: '005'},
                {name: 'Reading', src: Reading, id: '006'},
                {name: 'Soccer', src: Soccer, id: '007'},
                {name: 'Jedi', src: Jedi, id: '008'},
                {name: 'Celebrity', src: Celebrity, id: '009'},
                {name: 'Sax', src: Sax, id: '010'},
            ]};
        let feedbackArray = avatarArray.data.map(function(ele, index){
            return(
                <div className="row" key={index}>
                    <div className="col-sm-6">
                        <Link to='/'>
                            <img key = {index} src={ele.src} className="img-thumbnail avatar_container"/>
                        </Link>
                    </div>
                </div>
            )
        });
            return (
                <div className='container-fluid'>
                    <div>
                        <p className="display-2 text-center">Select Avatar</p>     
                    </div>
                    <div className='row'>
                        <div className="text-center col-6">
                            {feedbackArray}
                        </div>
                        <div className="text-center col-6">
                            {feedbackArray}
                        </div>
                    </div>
                </div>



    //         <div>
    //         <div className="container-fluid">
    //         <h1 className="display-2">Pick your Avatar</h1>     
    //      </div>
    //      <div className="container-fluid">
    //      <div className="row">
    //          <div className="col-sm-6">
    //              <img src={Dj} alt="brettDj" className="img-thumbnail"/>
    //          </div>
    //          <div className="col-sm-6">
    //              <img src={Tuba} alt="brettDj" className="img-thumbnail"/>
    //          </div>
    //         </div> 
    //      <div className="row">
    //          <div className="col-sm-6">
    //              <img src={Piano} alt="brettDj" className="img-thumbnail"/>
    //          </div>
    //          <div className="col-sm-6">
    //              <img src={Planet} alt="brettDj" className="img-thumbnail"/>
    //          </div>
    //         </div> 
    //      <div className="row">
    //          <div className="col-sm-6">
    //              <img src={Rapper} alt="brettDj" className="img-thumbnail"/>
    //          </div>
    //          <div className="col-sm-6">
    //              <img src={Reading} alt="brettDj" className="img-thumbnail"/>
    //          </div>
    //         </div> 
    //      <div className="row">
    //          <div className="col-sm-6">
    //              <img src={Soccer} alt="brettDj" className="img-thumbnail"/>
    //          </div>
    //          <div className="col-sm-6">
    //              <img src={Jedi} alt="brettDj" className="img-thumbnail"/>
    //          </div>
    //         </div> 
    //      <div className="row">
    //          <div className="col-sm-6">
    //              <img src={Celebrity} alt="brettDj" className="img-thumbnail"/>
    //          </div>
    //          <div className="col-sm-6">
    //              <img src={Sax} alt="brettDj" className="img-thumbnail"/>
    //          </div>
    //         </div> 
     
    //         </div>
  
    //     </div>
        )
    }
}

export default Avatar;