import React from "react";
import styles from './users.module.css'
import {UsersType} from "../../Redux/users-reducer";

type UsersPropsType = {
    users: Array<UsersType>;
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers:(param: Array<UsersType>)=> void;
}

const Users = (props: UsersPropsType) => {
    if (props.users.length === 0)
    {
        props.setUsers(
            [
               /* {
                    id: 1,
                    photoUrl: 'https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg',
                    followed: true,
                    fullName: 'Andrey',
                    status: "Lubaga",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 2,
                    photoUrl: 'https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg',
                    followed: false,
                    fullName: 'Marina',
                    status: "Friend",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 3,
                    photoUrl: 'https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg',
                    followed: true,
                    fullName: 'Oleg',
                    status: "Samurai",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 4,
                    photoUrl: 'https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg',
                    followed: true,
                    fullName: 'Ray',
                    status: "Friend",
                    location: {city: "Minsk", country: "Belarus"}
                }*/
            ]
        )
    }



    return <div>
        {
            props.users.map((u)=> <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.usersPhoto}  />
                </div>

                <div>
                    {
                        u.followed
                            ? <button onClick={ ()=> {props.unfollow(u.id)}}> unfollow</button>
                            : <button onClick={ ()=> {props.follow(u.id)}}> Follow</button>
                    }

                </div>
            </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
    </div>
}
export default Users