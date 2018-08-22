import React, { Component } from 'react'
import { ReactMic } from 'react-mic';
import axios from 'axios';
import '../assets/css/microphone.css'

class Microphone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }
    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    // this.postRecording = this.postRecording.bind(this);
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
 
  //unable to add async because npm install components
  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
    const blobObject = recordedBlob;
    const response = axios.post('/stand_app.php', blobObject.blobURL, {
      params: {
        action: 'get_all_todos'
      }
    })

    console.log(response);
    
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
          <button onClick={this.stopRecording} type="button">
            <i className="far fa-stop-circle fa-4x"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default Microphone;