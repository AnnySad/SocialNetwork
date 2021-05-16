import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import {HeaderContainerPropsType, MSTP} from "./HeaderContainer";

function Header(props: HeaderContainerPropsType) {
const onClickLogout = () => {
    props.logoutTC()
}
    return <header className={s.header}>
        <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGRPBfeIhYDR8QlaRPIbcUbBbeYupsOsUcQ&usqp=CAU' alt =""/>

   <div className={s.loginBlock}>
       {
           props.auth.isAuth
               ? <div>{props.auth.login} - <button onClick={onClickLogout}>logout</button></div>
               : <NavLink to={'/login'}>Login</NavLink>
       }
   </div>
    </ header>
}

export default Header;