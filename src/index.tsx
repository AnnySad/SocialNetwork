import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './Redux/Redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

let rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>

        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree)
reportWebVitals();
