import styles from "./users.module.css";
import userPhoto from "../../assets/img/user.png.jpg";
import React from "react";
import {UsersType} from "../../Redux/users-reducer";
import {NavLink} from 'react-router-dom';
import Paginator from "../common/Paginator/Paginator";
import User from "./Userrrr";


type UsersPropsType = {
    portionSize: number;
    followingInProgress: Array<number>;
    users: Array<UsersType>;
    currentPage: number;
    pageSize: number;
    totalUsersCount: number;
    follow: (userID: number) => void;
    unFollow: (userID: number) => void;
    onPageChanged: (p: number) => void;
}


let Users = (props: UsersPropsType) => {

    return <div>
        <Paginator currentPage={props.currentPage}
                   pageSize={props.pageSize}
                   totalItemsCount={props.totalUsersCount}
                   onPageChanged={props.onPageChanged}
                   portionSize={props.portionSize}/>
        {
            props.users.map((u) =>
                <User key={u.id}
                      user={u}
                      followingInProgress={props.followingInProgress}
                      unFollow={props.unFollow}
                      follow={props.follow}/>)}
    </div>
}
export default Users;