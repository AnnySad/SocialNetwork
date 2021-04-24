import React from "react";
import {connect} from "react-redux";

import {
    getUsers,
    setCurrentPage, toggleFollowingProgress,
    UsersType, follow, unFollow
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/Redux-store";
import Users from "./Users";
import Tenor from "../common/tenor/tenor";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MDTPType = {
    toggleFollowingProgress: any
    getUsers: (currentPage: number, pageSize: number) => void;
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


// type UsersAPIPropsType = {
//     users: Array<UsersType>;
//     totalUsersCount: number;
//     pageSize: number;
//     currentPage: number;
//     isFetching: boolean;
//     followingInProgress: Array<number>
//     follow: (userID: number) => void;
//     unfollow: (userID: number) => void;
//     setCurrentPage: (p: number) => void;
//     setUsers: (users: Array<UsersType>) => void;
//     getUsers : (currentPage: number, pageSize : number) => void;
// }

export type UsersPropsType = MSTPType & MDTPType

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

export default compose<React.ComponentType>(
    WithAuthRedirect,
    (connect(mapStateToProps, {toggleFollowingProgress, setCurrentPage, follow, unFollow, getUsers})

    ))(UsersContainer)
