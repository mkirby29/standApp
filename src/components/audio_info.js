import React from 'react';

import Header from './header';
import CommentPlayer from './comment_player';

export default props => {
    return (
        <div>
            <Header/>
            <CommentPlayer/>
        </div>
    )
}

// fix is needed in comment_player! not here