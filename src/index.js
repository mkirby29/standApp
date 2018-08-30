import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import registerServiceWorker from './helpers/registerServiceWorker';

import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
