import usersPNG from "../../../assets/img/user.png.jpg";
import React from "react";
import s from "./userPNG.module.css"



let UsersPNG = () => {
    return <div className={s.content}>
        <img src={usersPNG}/>
    </div>
}
export default UsersPNG