import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './Redux/Redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from './StoreContext';





let rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App  store={store}/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree)
reportWebVitals();
