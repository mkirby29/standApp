import React, {Component} from 'react';

import Header from './header';
import NewsFeed from './news_feed';
import Footer from './footer';
import {Link} from 'react-router-dom';

import { formatPostData } from '../helpers';
import axios from 'axios';
import '../assets/css/login.css';
import GoogleComponent from './googleOATH';
import { GoogleLogout } from 'react-google-login';
import {Route} from 'react-router-dom';
import redirect from '../hoc/redirect';




class LoginConditional extends Component {
    redirectToTarget = () => {
        console.log("clicked")
        this.props.history.push(`/login`)
      }
    render () {
        const logout = () => {
            console.log('logout')
          }
          
        return(
            <div className="right">
         
              {
                // this.props.loggedin ? //keeps being false, not working. Changed to 'true' for testing
                true ?

                <Link to = "/login">
                <GoogleLogout
                    buttonText="Logout"
                    // onLogoutSuccess={redirect(logout, '/login')}
                    // onClick={redirect(logout, '/login')}
                    onClick={this.redirectToTarget}



                >
                </GoogleLogout>
                </Link>
                :
                <Link to = "/login">
                <GoogleLogout
                    buttonText="Login"
                    // onLogoutSuccess={redirect(logout, '/login')}
                    // onClick={redirect(logout, '/login')}
                    onClick={this.redirectToTarget}


                >
                </GoogleLogout>
                </Link>

                }
            </div>
            



                // <Header/>

       
  
        )
    }
}

export default LoginConditional;