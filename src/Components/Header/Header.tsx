import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import {MSTP} from "./HeaderContainer";

const Header = (props:MSTP) => {
    return <header className={s.header}>
        <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGRPBfeIhYDR8QlaRPIbcUbBbeYupsOsUcQ&usqp=CAU' alt =""/>

   <div className={s.loginBlock}>
       {
           props.auth.isAuth ? props.auth.login :
       <NavLink to={'/login'}>Login</NavLink>
       }
   </div>
    </ header>
}

export default Header;