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
export type MessagesPageType = {
    textNewMessages: string;
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
export type RoutStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}
export type storeType = {
    _state: RoutStateType
    /* addPost: () => void
     updateNewPostText: (newText: string) => void*/
    getState: () => RoutStateType
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: actionType) => void
}
export type addPostDispatchType = {
    type: 'ADD_POST'
}

export type updateNewPostTextDispatchType = {
    type: 'UPDATE_NEW_POST_TEXT'
    newText: string
}

export type sendMessagesActionCreatorDispatchType = {
    type: 'SEND_NEW_MESSAGES'
}

export type updateNewMessagesBodyActionCreatorDispatchType = {
    type: 'TEXT_NEW_MESSAGES'
    body: string
}

export type actionType =
    addPostDispatchType
    | updateNewPostTextDispatchType
    | sendMessagesActionCreatorDispatchType
    | updateNewMessagesBodyActionCreatorDispatchType


let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 156},
                {id: 2, message: 'It\'s my first post', likesCount: 20},
                {id: 3, message: 'BlaBla', likesCount: 10},
                {id: 4, message: 'I am happy!', likesCount: 90},
            ],
            newPostText: "Budiuaka"
        },

        messagesPage: {
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
            textNewMessages: "ww"
        },


    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer;//паттерн=observer
    },

    _rerenderEntireTree() {//стало методом
        console.log('State change')
    },

    dispatch(action: addPostDispatchType | updateNewPostTextDispatchType | sendMessagesActionCreatorDispatchType | updateNewMessagesBodyActionCreatorDispatchType) {
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""; //зануляем
            this._rerenderEntireTree();
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireTree();
        } else if (action.type === 'TEXT_NEW_MESSAGES') {
            this._state.messagesPage.textNewMessages = action.body;
            this._rerenderEntireTree()
        } else if (action.type === 'SEND_NEW_MESSAGES') {
            debugger
            let body = this._state.messagesPage.textNewMessages;
            this._state.messagesPage.textNewMessages = " "; //зануляем
            this._state.messagesPage.messages.push({id: 6, message: body})
            this._rerenderEntireTree()
        }

    }
}
const ADD_POST: string = 'ADD-POST'
const UPDATE_NEW_POST_TEXT: string = 'UPDATE-NEW-POST-TEXT'
const TEXT_NEW_MESSAGES: string = 'TEXT_NEW_MESSAGES'
const SEND_NEW_MESSAGES: string = 'SEND_NEW_MESSAGES'

export const addPostActionCreator = (): addPostDispatchType => ({
    type: 'ADD_POST'
})
export const updateNewPostTextActionCreator = (newText: string): updateNewPostTextDispatchType => ({
    type: 'UPDATE_NEW_POST_TEXT', newText: newText
})
export const sendMessagesActionCreator = (): sendMessagesActionCreatorDispatchType => ({
    type: 'SEND_NEW_MESSAGES'
})
export const updateNewMessagesBodyActionCreator = (body: string): updateNewMessagesBodyActionCreatorDispatchType => ({
    type: 'TEXT_NEW_MESSAGES', body: body
})


//window.store=store;//прописать в консоли стайт и увидить , что у нас ест
export default store;