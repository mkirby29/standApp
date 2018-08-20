import React, {Component} from 'react';

import Header from './header';
import NewsFeed from './newsFeed';
import Footer from './footer';
// import Avatar from './avatar_select'

class Home extends Component {
    render () {
        return(
            <div>
                {/* <Avatar/> */}
                <Header/>
                <NewsFeed/>
                <Footer/>
            </div>
        )
    }
}

export default Home;