import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/Redux-store";

type MDTPType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<any>) => void
}

type MSTPType = {
    users: Array<UsersType>;
}

export type UsersPropsType = MSTPType & MDTPType

let mapStateToProps = (state: AppStateType): MSTPType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MDTPType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)