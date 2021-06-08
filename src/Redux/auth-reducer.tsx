import {authAPI} from "../API/api";
import {Dispatch} from "react";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";


export type InitialAuthStateType =
    {
        id: number | null
        email: string | null
        login: string | null
        isAuth: boolean
    };

export type AuthActionType = SetUserDataACType
type SetUserDataACType = {
    type: typeof SET_USER_DATA,
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
};
type DispatchGetAuthUserData = Dispatch<AuthActionType>

let initialState: InitialAuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};


export const authReducer = (state: InitialAuthStateType = initialState, action: AuthActionType): InitialAuthStateType => {


    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                id: action.userId,
                email: action.email,
                login: action.login,
                isAuth: true
            }
        }
        default:
            return state
    }
}
// ACTIONS CREATORS

    export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataACType => {
        return {
            type: SET_USER_DATA,
            userId,
            email,
            login,
            isAuth
        }
    }

export const getAuthUserData = () => {
    return (dispatch: Dispatch<AuthActionType>) => {

    authAPI.me()
        .then((response) => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            }
        )
} }

export const LoginTC = (email:string, password: string, rememberMe:boolean ) => {
    return (dispatch:  Dispatch<any>) => {

        authAPI.login( email, password, rememberMe )
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                    }else {
                    let message = response.data.message.length > 0 ? response.data.message[0] : "Some error"
                    dispatch(stopSubmit("login", {_error: "Common error"}))
                }
                }
            )
    } }

export const logoutTC = () =>  {
    return (dispatch: DispatchGetAuthUserData) => {

        authAPI.logout( )
            .then((response) => {
                    if (response.data.resultCode === 0) {
                        dispatch(setAuthUserData(null, null, null, false))
                    }
                }
            )
    } }

