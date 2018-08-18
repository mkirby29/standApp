import React, { Component } from 'react';
import '../assets/css/player.css';
import Audio from 'react-audioplayer';
import playlist from './playlist';

// need to fix here, not audio_info!

class CommentPlayer extends Component {
    constructor (props) {
        super(props)
    }
    someMethod() {
        // Some code ...
        // This code can only be able to execute when the audio component is already mounted
        ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-play'));
    }
    render() {
        return (
            <Audio
                width={415}
                height={800}
                autoPlay={true}
                comment={true}
                playlist={playlist}
                fullPlayer={false}
                ref={
                    audioComponent => { 
                        this.audioComponent = audioComponent
                    }
                }
            />
        )
    }
}

export default CommentPlayer;