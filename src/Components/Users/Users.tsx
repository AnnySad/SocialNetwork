import React from "react";
import styles from './users.module.css'
import axios from "axios";
import userPhoto from "../../assets/img/user.png.jpg"
import {UsersType} from "../../Redux/users-reducer";



type UsersPropsType = {
    users: Array<UsersType>;
    pageSize: number;
    currentPage: number;
    totalUsersCount: number;
    setCurrentPage: (p:number)=> void;
    setTotalUsersCount: (totalUsersCount:number)=> void;
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    setUsers: (users: Array<UsersType>) => void
}


class Users extends React.Component <UsersPropsType> {
// делаем запросы на сервак
componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        )

}
onPageChanged = (p: number) => {
    this.props.setCurrentPage(p);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
    ${p}&count=${this.props.pageSize}`)
        .then((response) => {
                this.props.setUsers(response.data.items)
            }
        )
}

    render() {
let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) //округляем в большую сторону
let pages = [];
for ( let i=1; i <= pagesCount; i++) {
    pages.push(i);
}
        return <div>
            <div>
                {pages.map(p => {
                 return   <span
                 onClick={()=> {
                     this.onPageChanged(p)
                 }}
                 className ={p === this.props.currentPage ?  styles.selectedPage : "" }
                 > {p}</span>
                })}
            </div>
            {
                this.props.users.map((u) => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                </div>

                <div>
                    {
                        u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}> unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}
export default Users;