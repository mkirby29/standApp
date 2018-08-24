import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../assets/css/comment_player.css';
import song from '../assets/audio/betterdays.mp3';

// need to fix here, not audio_info!

class CommentPlayer extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className="player container text-center">
                <div className="row">
                    <Link to='/'><i className="fas fa-chevron-left fa-2x back-button"/></Link>
                </div>
                <div className="song">
                    <h1 className="name">Song's Name</h1>
                    <h3 className="artist">Artist Name</h3>
                </div>
                <div className="display-area">
                    <canvas></canvas>
                    <div className="comments-container">Comment Container</div>
                    <div className="time"></div>
                </div>
                <div className="playarea d-flex justify-content-around">
                    <i className="fas fa-volume-up fa-3x unmute"/>
                    <i className="fas fa-volume-off fa-3x mute"/>
                    <i className="fas fa-play fa-3x play"/>
                    <i className="fas fa-pause fa-3x pause"/>
                </div>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" id='comment-input' placeholder="Comment Here"/>
                        <div className='comment-button'>
                            <i className="fas fa-comment fa-2x"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CommentPlayer;