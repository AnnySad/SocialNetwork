import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleWare));//applyMiddleware-прими промежуточные слои

export type AppStateType = ReturnType<typeof reducers>