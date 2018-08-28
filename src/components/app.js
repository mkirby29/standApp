import React, { Component } from 'react';

import {Route, Switch} from 'react-router-dom';

import Home from './home';
import AudioInfo from './audio_info';
import Recording from './recording';
import NotFound from './404';
import Avatar from './avatar_select'
import Post from './posts';
import login from './login'
import '../assets/css/app.css';
import VisualizerPlayer from './visualizer_player';

class App extends Component {
    render () {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route 
                        path='/audio_info' 
                        render={ (props) => {
                            // replace with audio_desp component
                            return <AudioInfo/>
                        }}
                />
                <Route path='/recording' component={Recording}/>
                <Route path='/avatar_select' component={Avatar}/>
                <Route path='/posts' component={Post}/>
                <Route path='/login' component={login}/>
                <Route path='/visualizer_test' component={VisualizerPlayer}/>
                <Route component={NotFound}/>

                
            </Switch>
        )
    }
}

export default App;