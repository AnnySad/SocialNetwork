import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";


export type PostsTypeReduxStore ={
    message: string;
    likesCount: number;
}

let reducers = combineReducers( { //tipo state
    profilePage: profileReducer,
    dialogsPage: messageReducer,
    sidebar: sidebarReducer
});
export let store = createStore(reducers);

