import React, {useEffect} from "react";
import styles from './users.module.css'
import {UsersType} from "../../Redux/users-reducer";
import axios from "axios";
import userPhoto from "../../assets/img/user.png.jpg"
import {UsersPropsType} from "./UsersContainer";

/*type UsersPropsType = {
    users: Array<UsersType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
}*/
// type ResponseType = {
//     data: { items: any; }
//     users: any;
//     follow: (userID: number) => void
//     unfollow: (userID: number) => void
//     setUsers: (users: any) => void;
// }

const Users = (props: UsersPropsType) => {
    useEffect(()=> {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                debugger
                    props.setUsers(response.data.items)
                }
            )
    },[])
    // if (props.users.length === 0) {
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //         .then((response) => {
    //                 props.setUsers(response.data.items)
    //             }
    //         )
    // }

    return <div>
        {
            props.users.map((u: any) => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                </div>

                <div>
                    {
                        u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}> unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}> Follow</button>
                    }

                </div>
            </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
    </div>
}
export default Users