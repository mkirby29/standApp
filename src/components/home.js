import React, {Component} from 'react';

import Header from './header';
import NewsFeed from './news_feed';
import Footer from './footer';
import SearchBar from './search_bar';

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
        this.getNewsFeedData();
    }

    async getNewsFeedData () {
        const response = await axios.get('/api/stand_app.php', {
            params: {
                action: 'get_all'
            }
        })

        const { avatar, audio, id, author_name, username, likes } = response.data;
        console.log('getNewsFeedData response: ', response);

        let newState = {
            newsFeed: [response.data],
        };

        // if(listItems){
        //     newState.list = listItems;
        // } else if (message){
        //     newState.message = message;
        // } else {
        //     newState.message = 'Error with server'
        // }

        this.setState(newState);
    }

    async deleteItem(id) {
        // Use delete method to delete a to do item based on ID

        const response = await axios.delete('/api/stand_app.php', id, {
            params: {
                action: 'delete_item'
            }
        })

        this.getNewsFeedData();
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
        return(
            <div>
                <Header/>
                <SearchBar/>
                <NewsFeed/>
                <Footer/>
            </div>
        )
    }
}

export default connect(null, {
})(Home);