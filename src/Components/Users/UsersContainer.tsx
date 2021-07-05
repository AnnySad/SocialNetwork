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


export type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    portionSize: number
    followingInProgress: Array<number>
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    unFollow: (userID: number) => void
    follow: (userID: number) => void

}


class UsersContainer extends React.Component <UsersPropsType> {

    componentDidMount() {
        //this.props.getUsers(this.props.currentPage, this.props.pageSize);
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (currentPage: number) => {
        const {pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
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
                   portionSize={this.props.portionSize}/>
        </>

    }
}


let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: state.usersPage.portionSize
    }
}

export default compose<React.ComponentType>(
    //WithAuthRedirect,
    (connect(mapStateToProps, {toggleFollowingProgress, setCurrentPage, follow, unFollow, getUsers: requestUsers})

    ))(UsersContainer)
