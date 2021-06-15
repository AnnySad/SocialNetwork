import React from "react";
import {connect} from "react-redux";

import {
    setCurrentPage, toggleFollowingProgress,
    UsersType, follow, unFollow, requestUsers
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/Redux-store";
import Users from "./Users";
import Tenor from "../common/tenor/tenor";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "./users-selectors";


type MDTPType = {
    toggleFollowingProgress: any
    requestUsers: (currentPage: number, pageSize: number) => void;
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setCurrentPage: (currentPage: number) => void
}


type MSTPType = {
    users: Array<UsersType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: Array<number>
}


export type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    unFollow: (userID: number) => void
    follow: (userID: number) => void

}

//export type UsersPropsType = MSTPType & MDTPType

class UsersContainer extends React.Component <UsersPropsType> {
// делаем запросы на сервак
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (p: number) => {
        this.props.getUsers(p, this.props.pageSize);
    }

    render() {


        return <>
            {this.props.isFetching ? <Tenor/> : null}
            <Users currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}

// let mapStateToProps = (state: AppStateType): MSTPType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state: AppStateType): MSTPType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    //WithAuthRedirect,
    (connect(mapStateToProps, {toggleFollowingProgress, setCurrentPage, follow, unFollow, getUsers: requestUsers})

    ))(UsersContainer)
