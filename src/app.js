import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase';

import Router from './router';

import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyBD2O7BBsxAYJ2nB_yfsgsRXcX-WMl1ov4',
            authDomain: 'manager-7f14d.firebaseapp.com',
            databaseURL: 'https://manager-7f14d.firebaseio.com',
            projectId: 'manager-7f14d',
            storageBucket: 'manager-7f14d.appspot.com',
            messagingSenderId: '584543087661'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
