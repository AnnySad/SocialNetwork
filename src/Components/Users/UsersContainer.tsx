import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, UsersType} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/Redux-store";

type MDTPType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage:number) => void
    setTotalUsersCount: (totalCount:number) => void
}

type MSTPType = {
    users: Array<UsersType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number
}

export type UsersPropsType = MSTPType & MDTPType

let mapStateToProps = (state: AppStateType): MSTPType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
//
// let mapDispatchToProps = (dispatch: Dispatch): MDTPType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollow(userId))
//         },
//         setUsers: (users: Array<any>) => {
//             dispatch(setUsers(users))
//         }
//         setCurrentPage: (p:number) => {
//             dispatch(setCurrentPage(p))
//         }
//         setTotalUsersCount: (totalCount:any) => {
//             dispatch(setTotalUsersCount(totalCount))
//         }
//     }
// }



let UsersContainer = connect(mapStateToProps, {setTotalUsersCount, setCurrentPage, setUsers, follow, unfollow})(Users)

export default UsersContainer