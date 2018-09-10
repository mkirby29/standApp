import React, { Component } from 'react';
import '../assets/css/newsfeed.css';
import VisualizerPlayer from './visualizer_player';
import { getNewsfeed } from '../actions';
import { connect } from 'react-redux';

class NewsFeed extends Component {
    state = {
        newsFeed: ''
    }

    componentWillMount = () => {
        this.props.getNewsfeed();
    }

    render () {
        if (this.props.list.data) {
            this.renderNewsFeed = this.props.list.data.map( function(element){
                return(
                    <VisualizerPlayer key={element.id} audio={element}/>
                )
            })
        }
        console.log('this.props: ', this.props);
        return (
            <div>
                {this.renderNewsFeed}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        list: state.feed.all
    }
}

export default connect(mapStateToProps, {getNewsfeed})(NewsFeed);
