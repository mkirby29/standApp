import React, { Component } from 'react';
import '../assets/css/player.css';
import Audio from 'react-audioplayer';
import playlist from './playlist';

// need to fix here, not audio_info!

class CommentPlayer extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <Audio
                width={600}
                height={400}
                autoPlay={true}
                playlist={playlist}
            />
        )
    }
}

export default CommentPlayer;