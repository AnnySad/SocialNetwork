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
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
export type RoutStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}
export type storeType = {
    _state: RoutStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    getState: () => RoutStateType
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
}


let store: storeType = {
    _state: {//_делаем приватным

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
            ]
        }

    },

    getState() {
        return this._state
    },

    _rerenderEntireTree() {//стало методом
        console.log('State change')
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""; //зануляем
        this._rerenderEntireTree();
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._rerenderEntireTree();
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer;//паттерн=observer
    }

}

//window.store=store;//прописать в консоли стайт и увидить , что у нас ест
export default store;