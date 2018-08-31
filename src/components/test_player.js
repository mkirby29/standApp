import React, { Component } from 'react';
import '../assets/css/comment_player.css';
import { Link } from 'react-router-dom';

class TestPlayer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            buffer: null,
            duration: 0,
            tracks: { 
                artist: "Amadeus",
                song: "Goodbye",
                url: "https://api.soundcloud.com/tracks/436771803/stream?client_id=b1495e39071bd7081a74093816f77ddb",
                album_image: '',
            },
            playing: false,
            like: false,
            muted: false
        }
    }

    componentDidMount(){
        this.createAudio();
        this.createVisualizer();
    }

    createAudio () {
        this.audio = new Audio(this.state.tracks.url)
        this.audio.crossOrigin = "anonymous";
        this.audio.controls = true
    }

    createVisualizer () {
        const canvas = document.getElementById("comment-canvas");
        const ctx = canvas.getContext("2d");
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        console.log("wight height: ", width, height);

        let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        let analyser = audioCtx.createAnalyser();
        let audioSrc = audioCtx.createMediaElementSource(this.audio);

        audioSrc.connect(analyser);
        audioSrc.connect(audioCtx.destination);

        analyser.fftSize = 2048;
        analyser.minDecibels = -90;
        analyser.maxDecibels = 0;

        let bufferLength = analyser.frequencyBinCount;
        let dataArray = new Uint8Array(bufferLength);

        let gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, "#ff6464");
        gradient.addColorStop(1, "#6464ff");

        const draw = () => {
            requestAnimationFrame(draw);
            analyser.getByteFrequencyData(dataArray);

            ctx.fillStyle = "#e6e6e6";
            ctx.fillRect(0, 0, width, height);

            let segments = dataArray.length / 2;
            let radius = (height + dataArray[0]) / 5;
            let angle = (Math.PI * 2) / segments;

            ctx.lineWidth = 2;
            ctx.strokeStyle = gradient;

            for(let i = 0; i < segments; i++) {
                let barHeight = dataArray[i] > 0 ? dataArray[i] : 1;

                let x1 = width / 2 + Math.cos(angle * i) * radius;
                let x2 = width / 2 + Math.cos(angle * i) * (radius + barHeight);

                let y1 = height / 2 + Math.sin(angle * i) * radius;
                let y2 = height / 2 + Math.sin(angle * i) * (radius + barHeight);

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.closePath();
                ctx.stroke();
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

    toggleLikeButton = () => {
        this.setState({
            like: !this.state.like
        })
    }

    render() {
        return (
            <div className="player container text-center">
                <div className="row">
                    <Link to='/'><i className="fas fa-chevron-left fa-2x back-button"/></Link>
                </div>
                <div className="song">
                    <h1 className="name">{this.state.tracks.song}</h1>
                    <h3 className="artist">{this.state.tracks.artist}</h3>
                </div>
                <div className="display-area">
                    <canvas id='comment-canvas'></canvas>
                    <div className="comments-container">Comment Container</div>
                    <div className="time"></div>
                </div>
                {this.state.audio}
                <div className="playarea d-flex justify-content-around">
                    <i className="fas fa-undo-alt fa-3x" onClick={this.rewind.bind(this)}/>
                    <i className={!this.state.playing ? "fas fa-play fa-3x play" : "d-none"} onClick={this.play.bind(this)}/>
                    <i className={!this.state.playing ? "d-none" : "fas fa-pause fa-3x pause"} onClick={this.pause.bind(this)}/>
                    <i className={!this.state.muted ? "fas fa-volume-up fa-3x unmute" : "d-none"} onClick={this.mute.bind(this)}/>
                    <i className={!this.state.muted ? "d-none" : "fas fa-volume-off fa-3x mute"} onClick={this.unmute.bind(this)}/>
                </div>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" id='comment-input' placeholder="Comment Here"/>
                        <div className='comment-button'>
                            <i className="fas fa-comment fa-2x"/>
                            <i onClick={this.toggleLikeButton} className={this.state.like ? "fas fa-heart fa-lg" : "far fa-heart fa-lg"}></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default TestPlayer;