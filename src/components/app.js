import React, { Component } from 'react';

import {Route, Switch} from 'react-router-dom';

import Home from './home';
import AudioInfo from './audio_info';
import Recording from './recording';
import NotFound from './404';
import Avatar from './avatar_select'

class App extends Component {
    render () {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route 
                        path='/audio-info' 
                        render={ (props) => {
                            // replace with audio_desp component
                            return <AudioInfo/>
                        }}
                />
                <Route path='/recording' component={Recording}/>
                <Route path='/avatar_select' component={Avatar}/>

                <Route component={NotFound}/>
            </Switch>
        )
    }
}

export default App;