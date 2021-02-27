import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/State';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

let rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}/>

        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree)
reportWebVitals();
