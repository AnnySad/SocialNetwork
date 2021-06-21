import styles from "./users.module.css";
import userPhoto from "../../assets/img/user.png.jpg";
import React from "react";
import {UsersType} from "../../Redux/users-reducer";
import {NavLink} from 'react-router-dom';
import Paginator from "../common/Paginator/Paginator";


type UserPropsType = {
    followingInProgress: Array<number>;
    user: UsersType;
    follow: (userID: number) => void;
    unFollow: (userID: number) => void;
}


let User = (props: UserPropsType) => {

    // let user = user;
    return <div className={styles.userContainer}>
            <span>
                <div className={styles.photo}>
                    <NavLink to={'/profile/' + props.user.id}>
                    <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt=""/>
                    </NavLink>
                </div>

                 <div className={styles.btnWrap}>
                    {
                        props.user.followed ?
                            <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                    className={styles.btnMode}
                                    onClick={() => {
                                        props.unFollow(props.user.id)
                                    }}> Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      className={styles.btnMode}
                                      onClick={() => {
                                          props.follow(props.user.id)
                                      }}> Follow</button>
                    }

                </div>
            </span>
                <span>
                    <div className={styles.userDescription}>
                        <h5>{props.user.name}</h5>
                        <p>{props.user.status}</p>
                    </div>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
            </div>
}
export default User;