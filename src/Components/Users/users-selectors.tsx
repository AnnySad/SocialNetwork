import {AppStateType} from "../../Redux/Redux-store";
import {createSelector} from "reselect";
import {UsersType} from "../../Redux/users-reducer";
/*
export const  getUsers = (state: AppStateType) =>{
    return state.usersPage.users
}
*/
const  getUserSelector = (state: AppStateType) =>{
    return state.usersPage.users
}

export  const  getUsers = createSelector
(getUserSelector, (users:Array<UsersType>)=>{
    return users.filter((u) => true)
})

export const  getPageSize = (state: AppStateType) =>{
    return state.usersPage.pageSize
}
export const  getTotalUsersCount = (state: AppStateType) =>{
    return state.usersPage.totalUsersCount
}

export const  getCurrentPage = (state: AppStateType) =>{
    return state.usersPage.currentPage
}
export const  getIsFetching = (state: AppStateType) =>{
    return state.usersPage.isFetching
}
export const  getFollowingInProgress = (state: AppStateType) =>{
    return state.usersPage.followingInProgress
}

/*

users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress*/
