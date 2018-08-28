import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/visualizer.css';
import song from '../assets/audio/betterdays.mp3'
import albumImage from '../assets/images/album_art.jpg'

// takes in an array of objects container audio details
// but one select/takes one audio object

class VisualizerPlayer extends Component {
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
            playing: false
        }
    }

    componentDidMount(){
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
            this.analyser.smoothingTimeConstant = 0.5;
            // Fast Fourier Transform (use to determine frequency domain)
            // below means we get 256 bars' of frequency
            this.analyser.fftSize = 256;

            this.canvas = document.querySelector("canvas");
            this.canvas.width = window.innerWidth * 0.4;
            this.canvas.height = window.innerHeight * 0.05;
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
                  this.canvasContext.fillRect(x, HEIGHT - barHeight, barWidth, (barHeight - 18));
          
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

    render () {
        
        return (
            <div className="container-fluid">
                <div className="row audio_container">
                    <div className="left_container col-4 d-flex justify-content-center text-center">
                        <div className="avatar_container d-flex align-items-center justify-content-center" style={ { backgroundImage: `url(${this.state.tracks.album_image}})` } }>
                            {
                                this.state.playing
                                    ? <i className={"far fa-pause-circle fa-3x"} onClick={this.pause.bind(this)}></i>
                                    : <i className={"far fa-play-circle fa-3x"} onClick={this.play.bind(this)}></i>
                            }
                            <div className='likes-container'>
                                <i className="fas fa-heartbeat fa-lg"></i>
                                <div className='likes-counter'>100</div>
                            </div>
                        </div>
                    </div>
                    <div className="audio_display col-8 text-center">
                        <div className="audio_title">
                            <div className="align-middle post-title">
                                <Link to='/audio-info'>{this.state.tracks.artist} - {this.state.tracks.song}</Link>
                            </div>
                        </div>
                        <div className="audio_visualizer">
                            <canvas></canvas>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VisualizerPlayer;