import React, { Component } from 'react';
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




class Avatar extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
            <div className="container-fluid">
            <h1 className="display-2">Pick your Avatar</h1>     
         </div>
         <div className="container-fluid">
         <div className="row">
             <div className="col-sm-6">
                 <img src={Dj} alt="brettDj" className="img-thumbnail"/>
             </div>
             <div className="col-sm-6">
                 <img src={Tuba} alt="brettDj" className="img-thumbnail"/>
             </div>
            </div> 
         <div className="row">
             <div className="col-sm-6">
                 <img src={Piano} alt="brettDj" className="img-thumbnail"/>
             </div>
             <div className="col-sm-6">
                 <img src={Planet} alt="brettDj" className="img-thumbnail"/>
             </div>
            </div> 
         <div className="row">
             <div className="col-sm-6">
                 <img src={Rapper} alt="brettDj" className="img-thumbnail"/>
             </div>
             <div className="col-sm-6">
                 <img src={Reading} alt="brettDj" className="img-thumbnail"/>
             </div>
            </div> 
         <div className="row">
             <div className="col-sm-6">
                 <img src={Soccer} alt="brettDj" className="img-thumbnail"/>
             </div>
             <div className="col-sm-6">
                 <img src={Jedi} alt="brettDj" className="img-thumbnail"/>
             </div>
            </div> 
         <div className="row">
             <div className="col-sm-6">
                 <img src={Celebrity} alt="brettDj" className="img-thumbnail"/>
             </div>
             <div className="col-sm-6">
                 <img src={Sax} alt="brettDj" className="img-thumbnail"/>
             </div>
            </div> 
     
            </div>
  
        </div>
        )
    }
}

export default Avatar;