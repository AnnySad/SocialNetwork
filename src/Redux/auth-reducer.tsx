import {authAPI} from "../API/api";
import {Dispatch} from "react";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";


let initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};


export const authReducer = (state: AuthStateType = initialState, action: AuthActionType): AuthStateType => {


    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                id: action.userId,
                email: action.email,
                login: action.login,
                isAuth: true
            }
        default:
            return state
    }
}
// ACTIONS CREATORS

export const setUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: SET_USER_DATA, userId, email, login, isAuth} as const)


//thunks
export const getAuthUserDataTC = () => {

    return (dispatch: Dispatch<AuthActionType>) => {

       return  authAPI.me()
            .then((response) => {
                    if (response.data.resultCode === 0) {
                        let {id, login, email} = response.data.data
                        dispatch(setUserDataAC(id, login, email, true))
                    }
                }
            )
    }
}

export const LoginTC = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch<any>) => {

        authAPI.login(email, password, rememberMe)
            .then((response) => {
                debugger

                    if (response.data.resultCode === 0) {
                        dispatch(getAuthUserDataTC())
                    } else {
                        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                        dispatch(stopSubmit("login", {_error: `${message}`}))
                    }
                }
            )
    }
}

export const logoutTC = () => {
    return (dispatch:  Dispatch<AuthActionType>) => {

        authAPI.logout()
            .then((response) => {
                    if (response.data.resultCode === 0) {
                        dispatch(setUserDataAC(null, null, null, false))
                    }
                }
            )
    }
}
//types
export type AuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type AuthActionType = ReturnType<typeof setUserDataAC>
