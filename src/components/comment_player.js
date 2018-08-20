import React, { Component } from 'react';
import '../assets/css/player.css';
import Audio from 'react-audioplayer';
// import songs from './playlist';
import song from '../assets/audio/betterdays.mp3';

// need to fix here, not audio_info!

class CommentPlayer extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        // console.log('PLAYLIST:', songs); 
        return (
            <Audio
                // width={600}
                // height={400}
                // autoPlay={true}
                playlist={[
                    {
                        src: song,
                        name: 'The song that is playing'
                    }
                ]}
            />
        )
    }
}

export default CommentPlayer;