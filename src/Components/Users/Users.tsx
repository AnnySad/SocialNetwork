import styles from "./users.module.css";
import userPhoto from "../../assets/img/user.png.jpg";
import React from "react";
import {UsersType} from "../../Redux/users-reducer";
import {NavLink} from 'react-router-dom';
import {usersAPI} from "../../API/api";

type UsersPropsType = {
    followingInProgress: Array<number>;
    users: Array<UsersType>;
    currentPage: number;
    pageSize: number;
    totalUsersCount: number;
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    onPageChanged: (p: number) => void;
    toggleFollowingProgress:(isFetching: boolean, id:number)=> void;
}

let Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) //округляем в большую сторону
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span
                    onClick={() => {
                        props.onPageChanged(p)
                    }}
                    className={p === props.currentPage ? styles.selectedPage : ""}
                >{p}</span>
            })}
        </div>
        {
            props.users.map((u) => <div key={u.id} className={styles.userContainer}>
            <span>
                <div className={styles.photo}>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                    </NavLink>
                </div>

                 <div className={styles.btnWrap}>
                    {
                        u.followed ?
                            <button disabled={props.followingInProgress.some(id=> id === u.id)} className={styles.btnMode} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                //хотим отписаться и делаем post-запрос на сервер
                                usersAPI.deleteUnfollow(u.id)
                                    .then((data) => {
                                            if (data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                        props.toggleFollowingProgress(false, u.id)
                                        }
                                    )


                            }}> unfollow</button>
                            : <button disabled={props.followingInProgress.some(id=> id === u.id)} className={styles.btnMode} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                //хотим подписаться и делаем post-запрос на сервер
                                usersAPI.postFollow(u.id)
                                    .then((data) => {
                                            if (data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                        props.toggleFollowingProgress(false, u.id)
                                        }
                                    )


                            }}> Follow</button>
                    }

                </div>
            </span>
                <span>
                    <div className={styles.userDescription}>
                        <h5>{u.name}</h5>
                        <p>{u.status}</p>
                    </div>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
    </div>
}
export default Users;