import {
    ProfilePageType
} from "./Store"

const ADD_POST: string = 'ADD-POST'
const UPDATE_NEW_POST_TEXT: string = 'UPDATE-NEW-POST-TEXT'


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
    let stateCopy
    switch (action.type) {

        case "ADD_POST":
            let newPost = {
                // id: state.posts[state.posts.length-1].id++,
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            stateCopy = {...state,
                        posts: [...state.posts, newPost],
                        newPostText: ""
            }
            return stateCopy;

        case "UPDATE_NEW_POST_TEXT": return {...state, newPostText: action.newText}

        default: return state
    }
}

export default profileReducer;