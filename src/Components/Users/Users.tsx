import styles from "./users.module.css";
import userPhoto from "../../assets/img/user.png.jpg";
import React from "react";
import {UsersType} from "../../Redux/users-reducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";

type UsersPropsType = |{
    users: Array<UsersType>;
    currentPage: number;
    pageSize: number;
    totalUsersCount: number;
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    onPageChanged: (p: number) => void;
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
                            <button className={styles.btnMode} onClick={() => {
                                //хотим отписаться и делаем post-запрос на сервер
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {withCredentials: true,
                                        headers:{ //передаем ключ
                                        "API-KEY": "1b870066-a689-4dee-839d-63ffa07d2f22"
                                        }
                                    })
                                    .then((response) => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                        }
                                    )


                            }}> unfollow</button>
                            : <button className={styles.btnMode} onClick={() => {
                                //хотим подписаться и делаем post-запрос на сервер
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {withCredentials: true,
                                        headers:{ //передаем ключ
                                            "API-KEY": "1b870066-a689-4dee-839d-63ffa07d2f22"
                                        }})
                                    .then((response) => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
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