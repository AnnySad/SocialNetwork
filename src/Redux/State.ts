import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";

export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type dialogsPageType = {
    textNewMessages: string;
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
export type RoutStateType = {
    profilePage: ProfilePageType
    dialogsPage: dialogsPageType
    sidebar: any
}
export type storeType = {
    _state: RoutStateType
    getState: () => RoutStateType
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: any) => void
}

let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 156},
                {id: 2, message: 'It\'s my first post', likesCount: 20},
                {id: 3, message: 'BlaBla', likesCount: 10},
                {id: 4, message: 'I am happy!', likesCount: 90},
            ],
            newPostText: ""
        },

        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            dialogs: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Fredy'},
                {id: 3, name: 'Nika'},
                {id: 4, name: 'Sonia'},
                {id: 5, name: 'Ray'}
            ],
            textNewMessages: ""
        },

        sidebar: {}
    },

    getState() {return this._state},
    subscribe(observer: () => void) {this._rerenderEntireTree = observer;},//паттерн=observer
    _rerenderEntireTree() {console.log('State change')},//стало методом

    dispatch: function (action: any ) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = messageReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._rerenderEntireTree()
    }
}

//window.store=store;//прописать в консоли стайт и увидить , что у нас ест
export default store;