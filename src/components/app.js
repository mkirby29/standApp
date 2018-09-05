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
import loginGooglePage from './loginGooglePage'
import TestPlayer from './test_player';
import redirect from '../hoc/redirect';

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
                {/* <Route path='/login' component={redirect(login, '/')}/> */}
                <Route path='/login' component={login}/>

                <Route path='/test_player' component={TestPlayer}/>
                <Route component={NotFound}/>   
            </Switch>
        )
    }
}

export default App;