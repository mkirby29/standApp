import React, {Component} from 'react';

import Header from './header';
import NewsFeed from './newsFeed';
import Footer from './footer';

class Home extends Component {
    render () {
        return(
            <div>
                <Header/>
                <NewsFeed/>
                <Footer/>
            </div>
        )
    }
}

export default Home;