import {
    ProfilePageType
} from "./State"

const ADD_POST: string = 'ADD-POST'
const UPDATE_NEW_POST_TEXT: string = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state: ProfilePageType, action: any) => {
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