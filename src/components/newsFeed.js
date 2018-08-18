import React, { Component } from 'react';
import '../assets/css/newsfeed.css';
import avatar from '../assets/images/avatar.png';
import AudioContainer from './audio_container';

class NewsFeed extends Component {
    render () {
        return (
            <div>
                {/* need to make method that runs AudioContainer for each audio object, to display for each entry */}
                <AudioContainer profile={avatar}/>
                <AudioContainer profile={avatar}/>
                <AudioContainer profile={avatar}/>
                <AudioContainer profile={avatar}/>
                <AudioContainer profile={avatar}/>
                <AudioContainer profile={avatar}/>
            </div>
        )
    }
}

export default NewsFeed;