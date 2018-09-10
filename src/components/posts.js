import React, { Component } from 'react';
import '../assets/css/newsfeed.css';
import '../assets/css/posts.css'

import Header from './header';
import Footer from './footer';
import VisualizerPlayer from './visualizer_player';
import dummyAudioObject from '../assets/data/dummy_audio_object';

import avatar from '../assets/images/avatars/10kevinSoccer.jpg';
import Dm from './dm'


let responseDummy = dummyAudioObject;

class NewsFeed extends Component {
    render () {
        let renderUserPosts = responseDummy.data.map(function(element){
            return(
                <VisualizerPlayer key={element._id} audio={element}/>
            )
        })
        return (
            <div>
                <div>
                    <Dm/>
                </div>
                <Header/>
                <div className='container text-center'>
                    <img className='post_avatar_container' src={avatar}/>
                    <div className='account-info d-flex align-items-center justify-content-around'>
                        <div> <strong>Posts:</strong> 12</div>
                        <div> <strong>Likes:</strong> 158</div>
                    </div>
                </div>
                {renderUserPosts};
                <Footer/>
            </div>
        )
    }
}

export default NewsFeed;
