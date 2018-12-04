import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './app/App';
import reducers from './app/reducers';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
), document.getElementById('root'));


serviceWorker.unregister();
