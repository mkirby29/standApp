import React, { Component } from 'react';
import '../assets/css/comment_bar.css';

class CommentBar extends Component {
    render () {
        return (
            <div className="comment-bar input-group d-flex justify-content-center">
                <input type="text" className="comment-field form-control" placeholder="Comment Here"/>
                <div className="comment-button input-group-append">
                    <button className="btn btn-outline-secondary" type="button">
                        <i class="fas fa-comment"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentBar;