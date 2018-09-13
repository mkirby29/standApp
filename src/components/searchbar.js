import React, {Component} from 'react';

import SearchInput, {createFilter} from 'react-search-input';

import emails from './searchbarmails';
import '../assets/css/search_bar.css';

const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name', 'id']

class Searchbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  render () {
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div className='search-input search-bar input-group container'>
        <SearchInput className='search-input search-bar input-group ' onChange={this.searchUpdated} />
        {filteredEmails.map(email => {
          return (
            <div className='mail' key={email.id}>
              <div className='from'>{email.user.name}</div>
              <div className='subject'>{email.subject}</div>
            </div>
          )
        })}
      </div>
    )
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

export default Searchbar;