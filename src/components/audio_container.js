import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NewsFeedPlayer from './newsfeed_player';

class AudioContainer extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="container-fluid">
                <div className="row audio_container">
                    <div className="profile_image col-4 text-center">
                        {/* old avatar place holder, testing player */}
                        {/* <img src={this.props.profile} alt="profile image" className="img-fluid audio_image"/> */}
                        <NewsFeedPlayer/>
                    </div>
                    <div className="audio_display col-8 text-center">
                        <div className="audio_title">
                            <div className="d-line align-middle">
                                <Link to='/audio-info'>John Doe - Monday's Joke</Link>
                                <ion-icon className="align-middle" name="heart"></ion-icon>
                            </div>
                        </div>
                        <div className="audio_visualizer">
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default AudioContainer;