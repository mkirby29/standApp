import React, { Component } from 'react'
import { ReactMic } from 'react-mic';
import '../assets/css/microphone.css';
import axios from 'axios';

class Microphone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }
  }
 
  startRecording = () => {
    this.setState({
      record: true
    });
  }
 
  stopRecording = () => {
    this.setState({
      record: false
    });
  }
 
  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }
 
  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
    debugger;
    var blob = recordedBlob.blob;
    var audioFile = new File([blob], "music.mp3", {
      type: "audio/mp3"
    });

    var form = new FormData();
    form.set('audio', blob);
    form.set('id', 'mattkirby');
    var name = 'mikeyim'

    axios({
      method: 'post',
      url: '/api/stand_app.php?action=add_item',
      data: form, 
      config: { headers: {'Content-Type': 'multipart/form-data' }}   
    }).then(function(response) {
      console.log("Response", response);
    });

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