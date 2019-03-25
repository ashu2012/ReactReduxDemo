// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

import {
    BrowserRouter as Router
} from 'react-router-dom';

import {Provider} from 'react-redux';
import configureStore from './app/configureStore';
const store = configureStore();

import './index.css';

// arg1: Component
// arg2: real dom
ReactDOM.render(<Provider store={store}>
                    <Router>
                        <App />
                    </Router>
                </Provider>, 
                document.getElementById('root'));
