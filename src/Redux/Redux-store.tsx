import {combineReducers, createStore} from "redux";
import profileReducer, {PostsType} from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

let reducers = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

export let store = createStore(reducers);

export type StoreType = ReturnType<typeof reducers>