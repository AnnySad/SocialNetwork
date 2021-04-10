import {ProfileProps} from "../Components/Profile/Profile";

export type ProfilePageType = {
    posts: PostsType
    newPostText: string
    profile: ProfileType | null
}
export type PostsType = Array<PostType>
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string
    contacts: Array<ContactsType>
    lookingForAJob: true,
    lookingForAJobDescription: string
    fullName: string
    userId: 2,
    photos:Array<PhotosType>
}

type ContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}

type PhotosType = {
    small: string
    large: string
}
type addPostActionType = { type:'ADD-POST' }
type updateNewPostTextActionType = { type: 'UPDATE-NEW-POST-TEXT', newText: string }
type removePostActionType = { type: 'REMOVE-POST', id: number }
type setUserProfile = { type: 'SET-USER-PROFILE', profile: ProfileType }

type AllActionsType = updateNewPostTextActionType | addPostActionType | removePostActionType | setUserProfile

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 156},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 3, message: 'BlaBla', likesCount: 10},
        {id: 4, message: 'I am happy!', likesCount: 90},
    ],
    newPostText: "",
    profile: null
}
const profileReducer = (state: ProfilePageType = initialState, action: AllActionsType): ProfilePageType  => {


    switch (action.type) {

        case "ADD-POST":
            debugger
            let stateCopy = {...state};
            let addPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                message: state.newPostText,
                likesCount: 0
            }
            stateCopy = {...state,
                posts: [...state.posts, addPost],   // копируем посты + пушим новый
                newPostText: ""                     // затираем ввод ввод после пуша
            }
            return stateCopy;

        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.newText}
        }

        case "REMOVE-POST": {
           return {...state, posts: {...state.posts}}

            // stateCopy.posts.filter(p => p.id !== action.id)

            // return stateCopy
        }

        case "SET-USER-PROFILE": {
            return {
                ...state, profile: action.profile
            }
        }

        default: return state
    }
}
// ACTIONS CREATORS
export const addPost = (): addPostActionType => ({type: "ADD-POST"});
export const removePost = (id: number): removePostActionType => ({type: "REMOVE-POST", id});
export const updateNewPostText = (newText: string): updateNewPostTextActionType => ({type: "UPDATE-NEW-POST-TEXT", newText});
export const setUserProfile = (profile: ProfileType): setUserProfile => ({type: 'SET-USER-PROFILE', profile });


export default profileReducer;