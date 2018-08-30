import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
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


class SimpleSlider extends React.Component {
  render() {
    var settings = {
              dots: true,
              infinite: false,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1
            };
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
            <div key={index} className='d-flex justify-content-center'>
                    <Link to='/'>
                        <img key = {index} src={ele.src}/>
                    </Link>
            </div>
        )
    });
    ;
    return (
        <div>
            <Slider {...settings}>
                {feedbackArray}
            </Slider>
        </div>
    );
  }}


export default SimpleSlider