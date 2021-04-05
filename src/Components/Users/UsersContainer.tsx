import React from "react";
import {connect} from "react-redux";

import {follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, UsersType} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/Redux-store";
import axios from "axios";
import Users from "./Users";

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

type UsersAPIPropsType = {
    users: Array<UsersType>;
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    setCurrentPage: (p:number)=> void;
    setTotalUsersCount: (totalUsersCount:number)=> void;
    setUsers: (users: Array<UsersType>) => void
}

export type UsersPropsType = MSTPType & MDTPType

class UsersAPIComponent extends React.Component <UsersAPIPropsType> {
// делаем запросы на сервак
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                }
            )

    }
    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
    ${p}&count=${this.props.pageSize}`)
            .then((response) => {
                    this.props.setUsers(response.data.items)
                }
            )
    }

    render() {


        return <Users   currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}/>

    }
}

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



let UsersContainer = connect(mapStateToProps,
    {setTotalUsersCount, setCurrentPage, setUsers, follow, unfollow})(UsersAPIComponent)

export default UsersContainer