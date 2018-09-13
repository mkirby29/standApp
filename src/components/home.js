import React, {Component} from 'react';
import Header from './header';
import NewsFeed from './news_feed';
import Footer from './footer';
import SearchBar from './search_bar';
import Sidebar from './sidebar';
import Searchbar from './searchbar';
import '../assets/css/search_bar.css';

import { formatPostData } from '../helpers';
import axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newsFeed: [],
        }
    }

    async componentDidMount () {

    }

    async addItem(event) {
        e.preventDefault();

        const dataToSend = formatPostData(this.state.newItem);

        const response = await axios.post('/api/stand_app.php', dataToSend, {
            params: {
                action: 'add_item'
            }
        })

        const { errors, success } = response.data;

        if(!success) {
            return this.setState({errors});
        }

        this.setState({
            newItem: {
                title: '',
                details: ''
            },
            submitted: true,
            errors: []
        })

        this.getNewsFeedData();
    }

    render () {
        console.log('HOME: ', this.props.user)
        return(
            <div>
                {/* <Sidebar/> */}
                <div id="page-content-wrapper">
                    <Header/>
                    {/* <SearchBar/> */}
                    <Searchbar/>
                    <NewsFeed/>
                    <Footer/>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {

})(Home);