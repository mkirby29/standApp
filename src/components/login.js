import React, {Component} from 'react';

import Header from './header';
import NewsFeed from './news_feed';
import Footer from './footer';

import { formatPostData } from '../helpers';
import axios from 'axios';
import Google from './google';
import Facebook from './facebook'



class Login extends Component {


    render () {
        return(
            <div>
                <Header/>
                <Facebook/>
                <Google/>

            </div>
        )
    }
}

export default Login;