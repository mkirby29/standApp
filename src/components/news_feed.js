import React, { Component } from 'react';
import '../assets/css/newsfeed.css';
import avatar from '../assets/images/avatars/10kevinSoccer.jpg';
import AudioContainer from './audio_container';

let responseDummy = {
    data: 
    [
        {name: 'guitar1', image: avatar, id:'001'},
        {name: 'guitar2', image: avatar, id:'002'},
        {name: 'guitar3', image: avatar, id:'003'},
        {name: 'guitar4', image: avatar, id:'004'},
        {name: 'guitar5', image: avatar, id:'005'},
        {name: 'guitar6', image: avatar, id:'006'}
    ]
}

class NewsFeed extends Component {
    render () {
        let renderNewsFeed = responseDummy.data.map(function(element, index){
            return(
                <AudioContainer key={index} profile={element.image}/>
            )
        })
        return (
            <div>
                {/* need to make method that runs AudioContainer for each audio object, to display for each entry */}
                {/* <AudioContainer profile={avatar}/>
                <AudioContainer profile={avatar}/>
                <AudioContainer profile={avatar}/>
                <AudioContainer profile={avatar}/>
                <AudioContainer profile={avatar}/>
                <AudioContainer profile={avatar}/> */}
                {renderNewsFeed}
            </div>
        )
    }
}

export default NewsFeed;
