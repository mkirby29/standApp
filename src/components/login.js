import React, {Component} from 'react';

import Header from './header';
import NewsFeed from './news_feed';
import Footer from './footer';

import { formatPostData } from '../helpers';
import axios from 'axios';
import Google from './google';
import Facebook from './facebook';
import '../assets/css/login.css';




class Login extends Component {


    render () {
        return(
            <div className="login_div">
              <p id="header_para" className="w3-animate-fading"><b>Stand</b><span id="card">App</span></p>
              <hr id="hr1" />
              <hr id="hr2" /><br /><br /><br />
              <Facebook/>
                <Google/>
            </div>
            



                // <Header/>

       
  
        )
    }
}

export default Login;