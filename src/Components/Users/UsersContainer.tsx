import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {follow, setUsers, unfollow, UsersType} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/Redux-store";

type MDTPType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
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
//     }
// }

export default connect(mapStateToProps, {setUsers, follow, unfollow})(Users)