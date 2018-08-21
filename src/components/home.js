import React, {Component} from 'react';

import Header from './header';
import NewsFeed from './newsFeed';
import Footer from './footer';
import { formatPostData } from '../helpers';
import axios from 'axios';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
        }
    }

    async componentWillMount() {
        this.getListData();
    }

    async getListData() {
        const response = await axios.get('api/stand_app.php', {
            params: {
                action: 'get_all'
            }
        })

        const { avatar, audio, id, author_name, username, likes } = response.data;
        console.log(response.data);
        console.log(response);

        let newState = {
            list: [],
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

        this.getListData();
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

        this.getListData();
    }



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