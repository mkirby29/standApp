import React, { Component } from 'react';
import '../assets/css/newsfeed.css';

// dummy data: need newfeed object and/or posts object by user id
import VisualizerPlayer from './visualizer_player';
import dummyAudioObject from '../assets/data/dummy_audio_object';

let responseDummy = dummyAudioObject;

class NewsFeed extends Component {
    render () {
        let renderNewsFeed = responseDummy.data.map( function(element){
            return(
                <VisualizerPlayer key={element._id} audio={element}/>
            )
        })
        return (
            <div>
                {renderNewsFeed}
            </div>
        )
    }
}

export default NewsFeed;
