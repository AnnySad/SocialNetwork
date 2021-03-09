import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../Redux/users-reducer";

type MDTPType = {
    followAC: (userID: number) => void
    unFollowAC: (userID: number) => void
}

export type MSTPType = {
usersPage: { users:  Array<UsersType>; }
}

let mapStateToProps = (state: MSTPType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
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