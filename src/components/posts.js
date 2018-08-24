import React, { Component } from 'react';
import '../assets/css/newsfeed.css';
import avatar from '../assets/images/avatars/10kevinSoccer.JPG';
import AudioContainer from './audio_container';
import Header from './header';

let responseDummy = {
    data: 
    [
        {name: 'guitar1', src: avatar, id:'001'},
        {name: 'guitar2', src: avatar, id:'002'},
        {name: 'guitar3', src: avatar, id:'003'},
        {name: 'guitar4', src: avatar, id:'004'},
        {name: 'guitar5', src: avatar, id:'005'}
    ]
}

class NewsFeed extends Component {
    render () {
        let renderNewsFeed = responseDummy.data.map(function(element, index){
            return(
                <AudioContainer key={index} profile={element.src}/>
            )
        })
        return (
            <div>
                <Header/>
                {/* need to make method that runs AudioContainer for each audio object, to display for each entry */}
                {/* <AudioContainer profile={avatar}/>
                <AudioContainer profile={avatar}/>
                <AudioContainer profile={avatar}/>
                <AudioContainer profile={avatar}/>
                <AudioContainer profile={avatar}/>
                <AudioContainer profile={avatar}/> */}
                {renderNewsFeed};
            </div>
        )
    }
}

export default NewsFeed;
