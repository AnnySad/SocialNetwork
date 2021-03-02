import {
    ProfilePageType
} from "./Store"

export type updateNewPostTextType = {
    type: 'UPDATE_NEW_POST_TEXT',
    newText: string
}

export type addPostType = {
    type:'ADD_POST'
}

export const addPost = (): addPostType =>
    (
        {type: 'ADD_POST' as const}
)

export const updateNewPostText = (newText: string): updateNewPostTextType =>
    ({
        type: 'UPDATE_NEW_POST_TEXT',
        newText: newText
    })


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 156},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 3, message: 'BlaBla', likesCount: 10},
        {id: 4, message: 'I am happy!', likesCount: 90},
    ],
    newPostText: ""
}
const profileReducer = (state: ProfilePageType = initialState, action: any) => {
    switch (action.type) {

        case "ADD_POST":

            let newPost = {
                // id: state.posts[state.posts.length-1].id++,
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
           return {
                ...state,
               posts: [...state.posts, newPost],
               newPostText: ""
           }

        case "UPDATE_NEW_POST_TEXT":{
            return {...state, newPostText: action.newText}
        }
        default:
            return state
    }
}

export default profileReducer;