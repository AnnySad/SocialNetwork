import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./app-reducer";

let reducers = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers,  composeEnhancers(
    applyMiddleware(thunkMiddleWare)
));
//export let store = createStore(reducers, applyMiddleware(thunkMiddleWare));//applyMiddleware-прими промежуточные слои

export type AppStateType = ReturnType<typeof reducers>