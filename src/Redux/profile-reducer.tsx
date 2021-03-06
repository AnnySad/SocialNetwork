import {profileAPI, usersAPI} from "../API/api";
import {Dispatch} from "react";


/*const ADD-POST = 'profile/ADD-POST'
const SET-USER-PROFILE = 'profile/SET-USER-PROFILE'
const SET-STATUS = 'profile/SET-STATUS'
const UPDATE-STATUS = 'profile/UPDATE-STATUS'*/

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 156},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 3, message: 'BlaBla', likesCount: 10},
        {id: 4, message: 'I am happy!', likesCount: 90},
    ],
    profile: null,
    status: ""
}
const profileReducer = (state: ProfilePageType = initialState, action: AllActionsType): ProfilePageType => {


    switch (action.type) {

        case "ADD-POST":
            let stateCopy = {...state};
            let addPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                message: action.newBodyPost,
                likesCount: 0
            }
            stateCopy = {
                ...state,
                posts: [...state.posts, addPost],   // копируем посты + пушим новый
               /* newPostText: ""     */                // затираем ввод ввод после пуша
            }
            return stateCopy;

       /* case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.newText}
        }*/

        case "REMOVE-POST": {
            return {...state, posts: {...state.posts}}
            //return {...state, posts: {...state.posts.filter(p => p.id !=action.id)}}
            //stateCopy.posts.filter(p => p.id !== action.id)

            //return stateCopy
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
export const addPostAC = (newBodyPost:string): addPostActionType => ({type: "ADD-POST", newBodyPost});
export const removePost = (id: number): removePostActionType => ({type: "REMOVE-POST", id});
/*export const updateNewPostText = (newText: string): updateNewPostTextActionType => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText
});*/
export const setUserProfile = (profile: ProfileType): setUserProfile => ({type: 'SET-USER-PROFILE', profile});
export const setStatus = (status: string) => ({type: 'SET-STATUS', status});
export const updateSetStatus = (newStatus: string) => ({type: 'UPDATE-STATUS', newStatus});

export type ProfileActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof removePost>/*
    | ReturnType<typeof updateNewPostText>*/
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof updateSetStatus>

type DispatchGetUserProfile = Dispatch<ProfileActionType>

// THUNK CREATORS
export const getUserProfile = (userId: string) => {
    return async (dispatch: DispatchGetUserProfile) => {
        let response = await usersAPI.getUserProfile(userId)
                dispatch(setUserProfile(response.data))
    }
};

export const getStatus =(userId: number) =>
    async (dispatch: DispatchGetUserProfile) => {
        let response = await profileAPI.getStatus(userId)
                dispatch(setStatus(response.data))
    };


export const updateStatus=(newStatus: string) =>
    async (dispatch: Dispatch<ProfileActionType>) => {
       let response= await profileAPI.updateStatus(newStatus)
               if (response.resultCode === 0) {
                    dispatch(updateSetStatus(newStatus))
                }
    };

//types

export type ProfilePageType = {
    posts: PostsType
    /* newPostText: string*/
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
type addPostActionType = { type: 'ADD-POST', newBodyPost:string }
type removePostActionType = { type: 'REMOVE-POST', id: number }
type setUserProfile = { type: 'SET-USER-PROFILE', profile: ProfileType }
type setStatus = { type: 'SET-STATUS', status: string }
type updateStatus = { type: 'UPDATE-STATUS', newStatus: string }

type AllActionsType = addPostActionType
    | removePostActionType
    | setUserProfile
    | setStatus
    | updateStatus

export default profileReducer;