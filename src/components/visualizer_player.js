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
            // create and connect node for processing audio
            this.javascriptNode = this.context.createScriptProcessor(2048, 1, 1);
            this.javascriptNode.connect(this.context.destination);

            // create and connect node for visualizer of audio
            this.analyser = this.context.createAnalyser();
            this.analyser.connect(this.javascriptNode);
            this.analyser.smoothingTimeConstant = 0.6;
            // Fast Fourier Transform (use to determine frequency domain)
            this.analyser.fftSize = 2048;

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
            console.log("init error visualizer")
        }
        // framer.setLoadingPercent(1);
        // scene.init();
    }

    loadTrack() {
        var that = this;
        // create XMLHttpRequest to exchange data with url without reload
        var request = new XMLHttpRequest();

        var track = this.state.tracks;

        // using XMLhttpRequest to GET, mp3 file, async
        request.open('GET', track.url, true);
        request.responseType = 'arraybuffer';

        // if request successful, decode audio data from response and apply buffer object
        request.onload = function() {
            that.context.decodeAudioData(request.response, function(buffer) {
                that.source.buffer = buffer;
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
        var that = this;

        // assign framer's frequencyData to a 8 index object array using analyser's frequencyBitCount
        // this.javascriptNode.onaudioprocess = function() {
        //     framer.frequencyData = new Uint8Array(that.analyser.frequencyBinCount);
        //     that.analyser.getByteFrequencyData(framer.frequencyData);
        // };
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
                        </div>
                    </div>
                    <div className="audio_display col-8 text-center">
                        <div className="audio_title">
                            <div className="align-middle post-title">
                                <Link to='/audio-info'>{this.state.tracks.artist} - {this.state.tracks.song}</Link>
                            </div>
                        </div>
                        <div className="audio_visualizer">
                        </div>
                        <div className='row d-flex flex-row-reverse'>
                            <i className="fas fa-heartbeat fa-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VisualizerPlayer;