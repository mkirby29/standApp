import React, { Component } from 'react';
import '../assets/css/player.css';
// import Audio from 'react-audioplayer';
// import songs from './playlist';
import song from '../assets/audio/betterdays.mp3';
import ReactAudioPlayer from 'react-audio-player';

// need to fix here, not audio_info!

class CommentPlayer extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <ReactAudioPlayer
                src={song}
                autoPlay
                controls
            />
        )
    }
}

export default CommentPlayer;