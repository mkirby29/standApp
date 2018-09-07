import React, {Component} from 'react';
import '../assets/css/login.css';
import GoogleComponent from './googleOATH';
import {Route} from 'react-router-dom';
import Bubbles from './bubble';
import Logo from './logo';

class Login extends Component {
    signIn = (values) => {
        this.props.logIn(values)
    }

    render () {
        const logout = () => {
            console.log('logout')
        }

        const { handleSubmit, authError } = this.props;
          
        return(
            <div className="login_div text-center">
            <Bubbles/>
                <Logo/>
              <hr id="hr1" />
              <i className="fas fa-microphone-alt microphone-login"/>
              <div className='login-button'>
                <Route path = '/login' component = {GoogleComponent} />
              </div>
            </div>
        )
    }
}

export default Login;