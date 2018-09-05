import React, { Component } from 'react';
import '../assets/css/newsfeed.css';

// dummy data: need newfeed object and/or posts object by user id
import VisualizerPlayer from './visualizer_player';
import dummyAudioObject from '../assets/data/dummy_audio_object';
import { getNewsfeed } from '../actions';
import { connect } from 'react-redux';

let responseDummy = dummyAudioObject;

class NewsFeed extends Component {
    componentDidMount () {
        this.props.getNewsfeed();
    }

    render () {
        let renderNewsFeed = responseDummy.data.map( function(element){
            return(
                <VisualizerPlayer key={element._id} audio={element}/>
            )
        })
        return (
            <div>
                {renderNewsFeed}
            </div>
        )
    }
}

function mapStateToProps (state) {
    console.log('newsfeed state: ', state)
    return {
        list: state.feed
    }
}

export default connect(mapStateToProps, {getNewsfeed})(NewsFeed);
