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



class LoginConditional extends Component {


    render () {
        const logout = () => {
            console.log('logout')
          }
          
        return(
            <div className="login_div text-center">
         
              {
                this.props.loggedin ?
                <GoogleLogout
                    buttonText="Google Logout"
                    onLogoutSuccess={logout}
                >
                </GoogleLogout>
                :
                
                <Route path = '/login' component = {GoogleComponent} />
                }
            </div>
            



                // <Header/>

       
  
        )
    }
}

export default LoginConditional;