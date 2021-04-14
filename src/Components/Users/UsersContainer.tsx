import React from "react";
import {connect} from "react-redux";

import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow,
    UsersType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/Redux-store";
import Users from "./Users";
import Tenor from "../common/tenor/tenor";
import {usersAPI} from "../../API/api";


type MDTPType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

type MSTPType = {
    users: Array<UsersType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: Array<number>

}

type UsersAPIPropsType = {
    users: Array<UsersType>;
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: Array<number>
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    setCurrentPage: (p: number) => void;
    setTotalUsersCount: (totalUsersCount: number) => void;
    setUsers: (users: Array<UsersType>) => void;
    toggleIsFetching: (value: boolean) => void
    toggleFollowingProgress:(isFetching: boolean, id:number)=> void;

}

export type UsersPropsType = MSTPType & MDTPType

class UsersContainer extends React.Component <UsersAPIPropsType, AppStateType> {
// делаем запросы на сервак
    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(data.items)
                    this.props.setTotalUsersCount(data.totalCount)
                }
            )

    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(data.items)
                }
            )
    }

    render() {


        return <>
            {this.props.isFetching ?  <Tenor /> : null}
            <Users currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}/>
        </>

    }
}

let mapStateToProps = (state: AppStateType): MSTPType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
//         setTotalUsersCount: (totalCount:number) => {
//             dispatch(setTotalUsersCount(totalCount))
//         }
//         toggleIsFetching: (isFetching:boolean) => {
//             dispatch( toggleIsFetching (isFetching))
//         }
//     }
// }



export default connect(mapStateToProps,
    {toggleFollowingProgress,toggleIsFetching,
        setTotalUsersCount, setCurrentPage, setUsers,
        follow, unfollow})(UsersContainer)
