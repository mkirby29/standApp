import React, {Component} from 'react';

import Header from './header';
import NewsFeed from './news_feed';
import Footer from './footer';

import { formatPostData } from '../helpers';
import axios from 'axios';
import '../assets/css/login.css';
import GoogleComponent from './googleOATH';
import { GoogleLogout } from 'react-google-login';
import {Route} from 'react-router-dom'



class Login extends Component {


    render () {
        const logout = () => {
            console.log('logout')
          }
          
        return(
            <div className="login_div text-center">
              <p id="header_para" className="w3-animate-fading"><b>Stand</b><span id="card">App</span></p>
              <hr id="hr1" />
              <hr id="hr2" />
                 <div>
                    <Route path = '/login' component = {GoogleComponent} />
                </div>
                <div>
                <GoogleLogout
                buttonText="Google Logout"
                onLogoutSuccess={logout}
                >
                </GoogleLogout>
                </div>
            </div>
            



                // <Header/>

       
  
        )
    }
}

export default Login;