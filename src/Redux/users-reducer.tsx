import {usersAPI} from "../API/api";
import {Dispatch} from "react";
import {updateObjectInArray} from "../validators/objects-helper";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE-FOLLOWING-PROGRESS";


const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {


    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users:updateObjectInArray(state.users, action.userId, "id",
                    {followed: true})

                /*users: state.users.map((u) => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u
                    } )*/

            }

        case UNFOLLOW:
            return {
                ...state,
                users:updateObjectInArray(state.users, action.userId, "id",
                    {followed: false})

                /* users: state.users.map((u) => {
                         if (u.id === action.userId) {
                             return {...u, followed: false}
                         }
                         return u
                     }
                 )*/
            }
        case SET_USERS: {
            return {
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            }
        }


        default:
            return state
    }
}
// ACTIONS CREATORS

export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UsersType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage: currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_FOLLOWING_PROGRESS, isFetching,
    userId
} as const)




//ThunkCreator
export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: DispatchType) => {

        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}
const followUnfollowFlow = (dispatch:DispatchType, userId: number, apiMethod:any, actionCreator:any) => {
    return async (dispatch: DispatchType) => {
        dispatch(toggleFollowingProgress(true, userId))
        //хотим отписаться и делаем post-запрос на сервер
        let data = await apiMethod(userId)
        if (data.resultCode == 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}



export const follow = (userId: number) => {
    return async (dispatch: DispatchType) => {
        // let apiMethod = usersAPI.postFollow.bind(usersAPI)
        // let actionCreator = followSuccess
        // followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)

        const result = await usersAPI.postFollow(userId);
        if (result.resultCode === 0) {
            dispatch(followSuccess(userId))
        }

        // followUnfollowFlow(dispatch, userId, usersAPI.postFollow.bind(usersAPI),followSuccess)

        // dispatch(toggleFollowingProgress(true, userId))
        // //хотим подписаться и делаем post-запрос на сервер
        // let data = await apiMethod(userId)
        // if (data.resultCode == 0) {
        //     dispatch(actionCreator(userId))
        // }
        // dispatch(toggleFollowingProgress(false, userId))
    }
}

export const unFollow = (userId: number) => {

    return async (dispatch: DispatchType) => {
        // let apiMethod = usersAPI.deleteUnfollow.bind(usersAPI)
        // let actionCreator = unfollowSuccess
        // followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
        // //followUnfollowFlow(dispatch, userId, usersAPI.deleteUnfollow.bind(usersAPI),unfollowSuccess)

        const res = await usersAPI.deleteUnfollow(userId);
        if(res.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }


        // dispatch(toggleFollowingProgress(true, userId))
        // //хотим отписаться и делаем post-запрос на сервер
        // let data = await apiMethod(userId)
        // if (data.resultCode == 0) {
        //     dispatch(actionCreator(userId))
        // }
        // dispatch(toggleFollowingProgress(false, userId))
    }
}


//types
type ActionsType =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

type DispatchType = Dispatch<ActionsType>

export type UsersType =
    {
        name: string,
        id: number,
        uniqueUrlName: null,
        photos: {
            small: string | undefined,
            large: string | undefined
        },
        status: null,
        followed: boolean,

    }


export let initialState: UsersStateType = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,//текущая страница
    isFetching: true,
    followingInProgress: []
}
export type UsersStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type InitialStateType = typeof initialState

export default usersReducer;



