import {combineReducers, createStore} from "redux";
import profileReducer, {PostsType} from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

let reducers = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

export let store = createStore(reducers);

export type AppStateType = ReturnType<typeof reducers>