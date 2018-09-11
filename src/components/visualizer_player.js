import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/visualizer.css';
import albumImage from '../assets/images/microphone.png'
import axios from 'axios';
import { connect } from 'react-redux';
import { likeAudio, unlikeAudio} from '../actions';
import Modal from 'react-modal';
import CategoryModal from './category_modal';

// takes in an array of objects container audio details
// but one select/takes one audio object

const customStyles = {
    content : {
      width                 : '80%',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      height: '20%',
      backgroundColor: 'grey',
      borderRadius: '20px'
    }
  };

class VisualizerPlayer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            buffer: null,
            duration: 0,
            tracks: this.props.audio,
            playing: false,
            modalIsOpen: false,
            liked: this.props.audio.liked
        }
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    avatarImage = {
        backgroundImage: `url(${albumImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };

    componentDidMount(){
        this.createAudio();
        this.createVisualizer();
    }

    createAudio () {
        console.log('create audio: ', this.props.audio.audio_url)
        this.audio = new Audio(this.props.audio.audio_url)
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
    toggleLike = async () => {
        const { audio: {audio_name , id}} = this.props
        if (this.state.liked === '1') {
            this.props.unlikeAudio(audio_name, id);
            console.log('unliked');
            await this.setState({
                liked: '0'
            })
        } else {
            this.props.likeAudio(audio_name, id);
            console.log('liked');
            await this.setState({
                liked: '1'
            })
        }
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

    openModal() {
        this.setState({modalIsOpen: true});
    }
     
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }
     
    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render () {
        // get current url and check to display correct page
        var currentLocation = window.location.href;
        var result = /[^/]*$/.exec(currentLocation)[0]
        console.log('visual player: ', this.props)
        console.log('this.state.liked', this.state.liked);
        return (
            <div className="container-fluid">
                <div className="row audio_container">
                    <div className="left_container col-4 d-flex justify-content-center text-center">
                        <div className="avatar_container d-flex align-items-center justify-content-center" style={this.avatarImage}>
                            {
                                this.state.playing
                                    ? <i className={"far fa-pause-circle fa-3x"} onClick={this.pause.bind(this)}></i>
                                    : <i className={"far fa-play-circle fa-3x"} onClick={this.play.bind(this)}></i>
                            }
                            <div className='likes_container' onClick={() => this.toggleLike()}>
                                <i className={result === '' ? (this.state.liked && this.state.liked !== '0') ? "fas fa-heart fa-lg" : "far fa-heart fa-lg" : 'd-none'}></i>
                                <i className={result === '' ? 'd-none' : 'fas fa-heartbeat fa-lg'}></i>
                                <div className={result === '' ? 'd-none' : 'likes-counter'}>100</div>
                            </div>
                        </div>
                    </div>
                    <div className="audio_display col-8 text-center">
                        <div className="align-middle post-title">
                            {/* to=audio-info/:id */}
                            <Link className='text-white' to={`/audio_info/${this.props.audio.id}`}>{this.props.audio.username} - {this.props.audio.audio_name}</Link>
                        </div>
                        <div className="audio_visualizer">
                            <canvas ref={e => this.canvasRef = e}/>
                            <i className={result === '' ? 'd-none' : 'fa fa-trash fa-4x'} onClick={(event) => {this.openModal()}} aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Are you sure you want to delete?</h2>
          <form className='container center-align'>
         
            <div className='post-controls d-flex justify-content-center'>
              <button className='btn btn-dark'><i className="fas fa-times"/></button>
              <button className='btn btn-warning' onClick={(e) => {this.deletePost(e)}}><i className="fas fa-check"/></button>
            </div>
          </form>
        </Modal>
            </div>
        )
    }
}

export default connect(null, {
    likeAudio,
    unlikeAudio
})(VisualizerPlayer);