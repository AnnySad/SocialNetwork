import {profileAPI, usersAPI} from "../API/api";
import {Dispatch} from "react";

export type ProfilePageType = {
    posts: PostsType
    newPostText: string
    profile: ProfileType | null
    status: string
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
    userId: number,
    photos: Array<PhotosType>
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
type addPostActionType = { type: 'ADD-POST' }
type updateNewPostTextActionType = { type: 'UPDATE-NEW-POST-TEXT', newText: string }
type removePostActionType = { type: 'REMOVE-POST', id: number }
type setUserProfile = { type: 'SET-USER-PROFILE', profile: ProfileType }
type setStatus = { type: 'SET-STATUS', status: string }
type updateStatus = { type: 'UPDATE-STATUS', newStatus: string }

type AllActionsType = updateNewPostTextActionType | addPostActionType | removePostActionType | setUserProfile | setStatus | updateStatus

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 156},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 3, message: 'BlaBla', likesCount: 10},
        {id: 4, message: 'I am happy!', likesCount: 90},
    ],
    newPostText: "",
    profile: null,
    status: ""
}
const profileReducer = (state: ProfilePageType = initialState, action: AllActionsType): ProfilePageType => {


    switch (action.type) {

        case "ADD-POST":
            let stateCopy = {...state};
            let addPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                message: state.newPostText,
                likesCount: 0
            }
            stateCopy = {
                ...state,
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
        case "SET-STATUS": {
            return {
                ...state, status: action.status
            }
        }
        case "UPDATE-STATUS": {
            return {
                ...state, status: action.newStatus
            }
        }

        default:
            return state
    }
}
// ACTIONS CREATORS
export const addPost = (): addPostActionType => ({type: "ADD-POST"});
export const removePost = (id: number): removePostActionType => ({type: "REMOVE-POST", id});
export const updateNewPostText = (newText: string): updateNewPostTextActionType => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText
});
export const setUserProfile = (profile: ProfileType): setUserProfile => ({type: 'SET-USER-PROFILE', profile});
export const setStatus = (status: string) => ({type: 'SET-STATUS', status});
export const updateSetStatus = (newStatus: string) => ({type: 'UPDATE-STATUS', newStatus});

export type ProfileActionType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof removePost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof updateSetStatus>

type DispatchGetUserProfile = Dispatch<ProfileActionType>

// THUNK CREATORS
export const getUserProfile = (userId: string) => {
    return (dispatch: DispatchGetUserProfile) => {
        usersAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
};

export const getStatus =(userId: number) =>
    (dispatch: DispatchGetUserProfile) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            })
    };


export const updateStatus=(newStatus: string) =>
    (dispatch: Dispatch<ProfileActionType>) => {
        profileAPI.updateStatus(newStatus)
            .then(data => {
               if (data.resultCode === 0) {
                    dispatch(updateSetStatus(newStatus))
                }
            })
    };



export default profileReducer;