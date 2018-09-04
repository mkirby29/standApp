import React, { Component } from 'react';
import '../assets/css/search_bar.css';

class SearchBar extends Component {
    render () {
        return (
            <div className="search-bar input-group container">
                <input type="text" className="search-field form-control" placeholder="Search title"/>
                <div className="search-button input-group-append">
                    <button className="btn btn-outline-secondary" type="button">
                        <i className="fas fa-search"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default SearchBar;