import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/visualizer.css';
import albumImage from '../assets/images/album_art.jpg'
import axios from 'axios';
import { connect } from 'react-redux';
import { getSingleAudio } from '../actions'

// takes in an array of objects container audio details
// but one select/takes one audio object

class VisualizerPlayer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            buffer: null,
            duration: 0,
            tracks: this.props.audio,
            playing: false,
            like: false
        }
    }

    componentDidMount(){
        this.createAudio();
        this.createVisualizer();
    }

    createAudio () {
        this.audio = new Audio(this.state.tracks.url)
        this.audio.crossOrigin = "anonymous";
        // this.audio.controls = true
    }

    createVisualizer () {
        const canvas = this.canvasRef;
        const ctx = canvas.getContext("2d");
        // let width = canvas.width = window.innerWidth;
        // let height = canvas.height = window.innerHeight;
        let width = canvas.width = window.innerWidth * 0.4;
        let height = canvas.height = window.innerWidth * 0.15;
        
        let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        let analyser = audioCtx.createAnalyser();
        let audioSrc = audioCtx.createMediaElementSource(this.audio);

        audioSrc.connect(analyser);
        audioSrc.connect(audioCtx.destination);

        analyser.fftSize = 256;
        analyser.minDecibels = -90;
        analyser.maxDecibels = 0;

        let bufferLength = analyser.frequencyBinCount;
        let dataArray = new Uint8Array(bufferLength);

        let gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, "#D4AF37");
        gradient.addColorStop(1, "#6464ff");

        let barWidth = (width / bufferLength) * 2.5;
        let barHeight;

        let x = 0;

        const draw = () => {
            requestAnimationFrame(draw);

            x = 0;

            analyser.getByteFrequencyData(dataArray);

            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, width, height);

            for (let i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i]/2;
                
                let r = 177 + (barHeight / 2);
                let g = 141 + (barHeight - 10 / 2);
                let b = 52;
              
                ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                ctx.fillRect(x, (height - barHeight)/2, barWidth, barHeight - 5);
                x += barWidth + 1;
            }
        }
        draw();
    }

    play () {
        this.audio.play();
        this.setState({
            playing: true
        })
    }

    pause () {
        this.audio.pause();
        this.setState({
            playing: false
        });
    }

    rewind () {
        this.audio.currentTime = this.audio.currentTime - 5;
    }

    mute () {
        this.audio.muted = true;
        this.setState({
            muted: true
        });
    }

    unmute () {
        this.audio.muted = false;
        this.setState({
            muted: false
        });
    }

    // need id in future
    async likedAudio () {
        const response = await axios.post('/api/stand_app.php', {
            params: {
                action: 'like_post'
            }
        })

        console.log('likedAudio: ', response);
    }

    // need audio if from previous response passed into player to 
    async getMp3FromS3 () {
        const response = await axios.get('/api/stand_app.php', {
            params: {
                action: 'get_audio_from_s3'
            }
        })
        console.log('getMp3fromS3: ', response);
    }

    // need to sync with server to save like state
    toggleLikeButton = (e) => {
        if (!this.state.like) {
            this.likedAudio();
        }
        this.setState({
            like: !this.state.like
        })
    }

    render () {
        // get current url and check to display correct page
        var currentLocation = window.location.href;
        var result = /[^/]*$/.exec(currentLocation)[0]

        console.log('props.audio: ', this.props.audio)
        return (
            <div className="container-fluid">
                <div className="row audio_container">
                    <div className="left_container col-4 d-flex justify-content-center text-center">
                        <div className="avatar_container d-flex align-items-center justify-content-center" style={ { backgroundImage: `url(${albumImage}})` } }>
                            {
                                this.state.playing
                                    ? <i className={"far fa-pause-circle fa-3x"} onClick={this.pause.bind(this)}></i>
                                    : <i className={"far fa-play-circle fa-3x"} onClick={this.play.bind(this)}></i>
                            }
                            <div className='likes_container'>
                                <i onClick={this.toggleLikeButton} className={result === '' ? this.state.like ? "fas fa-heart fa-lg" : "far fa-heart fa-lg" : 'd-none'}></i>
                                <i className={result === '' ? 'd-none' : 'fas fa-heartbeat fa-lg'}></i>
                                <div className={result === '' ? 'd-none' : 'likes-counter'}>100</div>
                            </div>
                        </div>
                    </div>
                    <div className="audio_display col-8 text-center">
                        <div className="align-middle post-title">
                            {/* to=audio-info/:id */}
                            <Link className='text-white' to='/audio_info'>{this.props.audio.artist} - {this.props.audio.song}</Link>
                        </div>
                        <div className="audio_visualizer">
                            <canvas ref={e => this.canvasRef = e}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VisualizerPlayer;