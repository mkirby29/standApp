import React, { Component } from 'react';
import '../assets/css/newsfeed.css';
import VisualizerPlayer from './visualizer_player';
import { getNewsfeed } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserID } from '../actions';
import { Fragment } from 'react';

import defaultAvatar from '../assets/images/avatars/default_avatar.png'
import Dj from '../assets/images/avatars/2brettDj.jpg';
import Tuba from '../assets/images/avatars/4codyTuba.jpg';
import Piano from '../assets/images/avatars/6erinPiano.jpg';
import Planet from '../assets/images/avatars/7frankPlanet.jpg';
import Rapper from '../assets/images/avatars/8jennaRapper.jpg';
import Reading from '../assets/images/avatars/9katReading.jpg';
import Soccer from '../assets/images/avatars/10kevinSoccer.jpg';
import Jedi from '../assets/images/avatars/12sarahJedi.jpg';
import Celebrity from '../assets/images/avatars/16nateCelebrity.jpg';
import Sax from '../assets/images/avatars/sax.jpg';

class NewsFeed extends Component {
    constructor(props){
        super(props);
        this.state = {
            newsfeed: '',
            avatarID: null,
            avatar: defaultAvatar,
            imageArray: [
                {name: 'Dj', src: Dj, id: 1},
                {name: 'Tuba', src: Tuba, id: 2},
                {name: 'Piano', src: Piano, id: 3},
                {name: 'Planet', src: Planet, id: 4},
                {name: 'Rapper', src: Rapper, id: 5},
                {name: 'Reading', src: Reading, id: 6},
                {name: 'Soccer', src: Soccer, id: 7},
                {name: 'Jedi', src: Jedi, id: 8},
                {name: 'Celebrity', src: Celebrity, id: 9},
                {name: 'Sax', src: Sax, id: 10},
                {name: 'Default', src: defaultAvatar, id: 0},
                {name: 'Tuba', src: Tuba, id: 11},
            ]
        }
    }

    async componentWillMount () {
        let token = localStorage.getItem('token');
        this.props.getNewsfeed();
        await this.props.getUserID(token);
        this.checkAvatar();
    }

    updateNewsfeed () {
        this.props.getNewsfeed();
    }

    logOut () {
        localStorage.removeItem('token');
    }

    checkAvatar = async () => {
        let imageArray = this.state.imageArray;
        if (this.props.user.id) {
            const { avatar } = this.props.user.id.data.data[0]
            for (var i = 0; i < imageArray.length; i++) {
                let imageID = imageArray[i].id;
                if (imageID == avatar) {
                    await this.setState({
                        avatar: imageArray[i].src
                    })
                }
            }
        } 
    }

    renderLinks () {
        const { auth } = this.props.user

        if (auth) {
            return (
                <Fragment>
                    <Link id="home" className="menu-item" to="/posts"><i className="fas fa-home fa-fw"/>  My Account</Link>
                    <Link id="about" className="menu-item" to="/avatar_select"><i className="far fa-user-circle fa-fw"/>   Avatar Select</Link>
                    <Link id="contact" className="menu-item" to="/about"><i className="fas fa-users fa-fw"/>  About Us</Link>
                    <Link id="contact" className="menu-item" to="/login" onClick={this.logOut.bind()}><i className="fas fa-sign-out-alt fa-fw"/>   Log Out</Link>
                </Fragment>
            )
        }
        
        return (
            <Fragment>
                <Link id="contact" className="menu-item" to="/about"><i className="fas fa-users fa-fw"/>  About Us</Link>
                <Link id="contact" className="menu-item" to="/login" onClick={this.logOut.bind()}><i className="fas fa-sign-out-alt fa-fw"/>   Login / Signup</Link>
            </Fragment>
        )
    }

    render () {
        if (this.props.list.data) {
            this.renderNewsFeed = this.props.list.data.map((element) => {
                return(
                    <VisualizerPlayer key={element.id} audio={element} update={this.updateNewsfeed.bind(this)}/>
                )
            })
        }
        
        return (
            <div className="row justify-content-end">
                <div className='desktop-menu col col-md-3 col-lg-3'>
                    <Link to='/posts'>
                        <img alt="Avatar" src={this.state.avatar} className="avatar_image" />
                    </Link>
                    {this.renderLinks()};
                </div>
                <div id='line'></div>
                <div className='newsfeed col col-sm-12 col-md-9 col-lg-9'>
                    {this.renderNewsFeed}
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        list: state.feed.all,
        avatar: state.user.avatar,
        user: state.user
    }
}

export default connect(mapStateToProps, {getNewsfeed, getUserID})(NewsFeed);
