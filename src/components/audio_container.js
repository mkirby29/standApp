import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NewsFeedPlayer from './newsfeed_player';

class AudioContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            like: false
        }
    }

    // need to sync with server to save like state
    toggleLikeButton = () => {
        this.setState({
            like: !this.state.like
        })
    }

    render () {
        var currentLocation = window.location.href;
        var result = /[^/]*$/.exec(currentLocation)[0]
        console.log('Header: Current Url: ', result);
        if (result === '') {
            return (
                <div className="container-fluid">
                    <div className="row audio_container">
                        {/* need to change background_url to given avatar image */}
                        <div className="profile_image col-4 text-center">
                            <NewsFeedPlayer/>
                        </div>
                        <div className="audio_display col-8 text-center">
                            <div className="audio_title">
                                <div className="d-line align-middle">
                                    <Link to='/audio-info'>John Doe - Monday's Joke</Link>
                                </div>
                            </div>
                            <div className="audio_visualizer">
                            </div>
                            <div className='row d-flex flex-row-reverse'>
                                <i onClick={this.toggleLikeButton} className={this.state.like ? "fas fa-heart fa-lg" : "far fa-heart fa-lg"}></i>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
            )
        } else {
            return (
                <div className="container-fluid">
                <div className="row audio_container">
                    <div className="profile_image col-4 text-center">
                        <NewsFeedPlayer/>
                    </div>
                    <div className="audio_display col-8 text-center">
                        <div className="audio_title">
                            <div className="align-middle post-title">
                                <Link to='/audio-info'>John Doe - Monday's Joke</Link>
                            </div>
                        </div>
                        <div className="audio_visualizer">
                        </div>
                        <div className='row d-flex flex-row-reverse'>
                            <i className="fas fa-heartbeat fa-lg"></i>
                            <p>69</p>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
            )
        }
    }
}

export default AudioContainer;