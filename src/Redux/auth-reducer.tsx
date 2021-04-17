import {authAPI} from "../API/api";
import {Dispatch} from "react";

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
    userId: number
    email: string
    login: string
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

    export const setAuthUserData = (userId: number, email: string, login: string): SetUserDataACType => {
        return {
            type: SET_USER_DATA,
            userId,
            email,
            login
        }
    }

export const getAuthUserData = () => {
    return (dispatch: DispatchGetAuthUserData) => {

    authAPI.me()
        .then((response) => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, login, email))
                }
            }
        )
} }



