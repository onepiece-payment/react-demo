import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension"

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './_reducers';
import history from './_components/History';
import Dashboard from './_components/Dashboard';

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <Router history ={history}>
            <div>
                <Route exact path="/" component={Dashboard}/>
            </div>
        </Router>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
