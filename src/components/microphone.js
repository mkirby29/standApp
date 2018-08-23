import React, { Component } from 'react'
import { ReactMic } from 'react-mic';
import axios from 'axios';
import '../assets/css/microphone.css';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Microphone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      modalIsOpen: false

    }
    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    // this.postRecording = this.postRecording.bind(this);
    // Modal binding

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  startRecording(){
    this.setState({
      record: true
    });
  }
 
  stopRecording(){
    this.setState({
      record: false
    });
  }
 
  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }
 
  //unable to add async because npm install components: old axios
  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
    const blobObject = recordedBlob;
    const response = axios.post('/stand_app.php', blobObject.blobURL, {
      params: {
        action: 'get_all_todos'
      }
    }).then((response)=>{console.log('recording post success', response)}).catch((error)=>{console.log('error recording posting', error.message)})

    console.log(response);
    
  }

  // Modal methods
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
 
  render() {
    return (
      <div className='microphone'>
        <ReactMic
          record={this.state.record}
          className="sound-wave centered"
          onStop={this.onStop}
          strokeColor="#FFFFFF"
          backgroundColor="black"
        />
        <div className='record-controls text-center'>
          <button onClick={this.startRecording} type="button">
            <span className='fa-stack fa-2x'>
              <i className="far fa-circle fa-stack-2x"></i>
              <i className="fas fa-circle fa-stack-1x fa-inverse inner-record"></i>
            </span>
          </button>
          <button onClick={this.stopRecording} onClick={this.openModal} type="button">
            <i className="far fa-stop-circle fa-4x"></i>
          </button>
          <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Completed Recording</h2>
          {/* <button onClick={this.closeModal}>close</button> */}
          <form>
            <input placeholder = "Enter audio title here"/>
            <button>Audio Player (BLOB) file</button>
            <button><i className="fa fa-trash" aria-hidden="false"></i></button>
            <button><i className="fas fa-sign-in-alt"></i></button>
          </form>
        </Modal>
        </div>
      </div>
    )
  }
}

export default Microphone;
