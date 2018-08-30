import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../assets/css/comment_player.css';
import song from '../assets/audio/betterdays.mp3';
import albumImage from '../assets/images/album_art.jpg'

// need to fix here, not audio_info!

class CommentPlayer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            buffer: null,
            duration: 0,
            tracks: { 
                artist: "Bryce Vince",
                song: "Drew Barrymore",
                url: song,
                album_image: albumImage,
            },
            playing: false,
            like: false
        }
    }

    componentDidMount(){
        console.log('Canvas Ref:', this.canvas);
        this.init();
    }

    init() {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        this.context = new AudioContext();
        this.context.suspend && this.context.suspend();
        this.playing = false;
        try {
            // create and connect node for processing audio (this will called every 2048 frames)
            this.javascriptNode = this.context.createScriptProcessor(2048, 1, 1);
            this.javascriptNode.connect(this.context.destination);

            // below if for visualizer, node, connect, and variables 
            // create and connect node for visualizer of audio
            this.analyser = this.context.createAnalyser();
            // this.analyser.connect(this.javascriptNode);
            this.analyser.smoothingTimeConstant = 0.9;
            // Fast Fourier Transform (use to determine frequency domain)
            this.analyser.fftSize = 512;

            this.canvas = document.querySelector('canvas');
            // this.canvas = this.canvasRef;
            this.canvas.width = window.innerWidth * 0.4;
            this.canvas.height = window.innerHeight * 0.25;
            this.canvasContext = this.canvas.getContext("2d")

            this.bufferLength = this.analyser.frequencyBinCount

            this.source = this.context.createBufferSource();
            this.destination = this.context.destination;
            this.loadTrack();

            // create and connect node for volume control
            this.gainNode = this.context.createGain();
            this.source.connect(this.gainNode);
            this.gainNode.connect(this.analyser);
            this.gainNode.connect(this.destination);

            this.initHandlers();
        } catch (e) {
            console.log("Init Error: Catch")
        }
        // framer.setLoadingPercent(1);
        // scene.init();
    }

    loadTrack() {
        // create XMLHttpRequest to exchange data with url without reload
        var request = new XMLHttpRequest();

        var track = this.state.tracks;

        // using XMLhttpRequest to GET, mp3 file, async
        request.open('GET', track.url, true);
        request.responseType = 'arraybuffer';

        // if request successful, decode audio data from response and apply buffer object
        request.onload = () => {
            this.context.decodeAudioData(request.response, (buffer) => {
                this.source.buffer = buffer;
            });
        };
        request.send();
    }

    play () {
        this.context.resume && this.context.resume();

        if (!this.playing) {
            if(this.source.context.state === 'suspended' && !this.context.resume){
                this.source.context.resume();
            } else {
                this.source.start();
            }
            
            this.playing = true;

            this.setState({
                playing: true
            });
        }
    }

    pause () {
        this.source.context.suspend();
        this.playing = false;
        this.setState({
            playing: false
        });
    }

    initHandlers () {
        // when javascriptNode is called, use infomation from analyzer node to draw the volume
        this.javascriptNode.onaudioprocess = () =>{
            
            let array = new Uint8Array(this.analyser.frequencyBinCount);

            let WIDTH = this.canvas.width;
            let HEIGHT = this.canvas.height;

            let barWidth = (WIDTH / this.bufferLength) * 2.5;
            let barHeight;
            let x = 0;

            this.renderFrame = () => {
                requestAnimationFrame(this.renderFrame);
          
                x = 0;
          
                this.analyser.getByteFrequencyData(array);
          
                this.canvasContext.fillStyle = "#ffffff";
                this.canvasContext.fillRect(0, 0, WIDTH, HEIGHT);
          
                for (var i = 0; i < this.bufferLength; i++) {
                  barHeight = array[i];
                  
                  let r = barHeight + (25 * ( i/ this.bufferLength));
                  let g = 250 * (i/this.bufferLength);
                  let b = 50;
                
                  this.canvasContext.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                  this.canvasContext.fillRect(x, HEIGHT - barHeight, barWidth, (barHeight));
                  x += barWidth + 1;
                }
            }
            // audio.play();
            this.renderFrame();
        };
    }

    getAverageVolume (array) {
        let values = 0;
        let average;

        for (var i = 0; i < array.length; i++) {
            values =  values + array[i];
        }

        average = values / array.length;
        return average;
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
                    <h1 className="name">Song's Name</h1>
                    <h3 className="artist">Artist Name</h3>
                </div>
                <div className="display-area">
                    <canvas></canvas>
                    <div className="comments-container">Comment Container</div>
                    <div className="time"></div>
                </div>
                <div className="playarea d-flex justify-content-around">
                    <i className={!this.state.muted ? "fas fa-volume-up fa-3x unmute" : "d-none"}/>
                    <i className={!this.state.muted ? "d-none" : "fas fa-volume-off fa-3x mute"}/>
                    <i className={!this.state.playing ? "fas fa-play fa-3x play" : "d-none"} onClick={this.play.bind(this)}/>
                    <i className={!this.state.playing ? "d-none" : "fas fa-pause fa-3x pause"} onClick={this.pause.bind(this)}/>
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

export default CommentPlayer;