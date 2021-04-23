import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

//let s = {
 //   'nav': 'Navbar_nav__17mde',
//    'item': 'Navbar_item__11GBQ'
//    'active': 'Navbar_active__6565cBQ'
// let classNew = `${s.item} ${s.active}`;
// }

const Navbar = () => {
    return < nav className={s.nav} >
    <div className= {s.item}>
       <NavLink to="/profile" activeClassName={s.activeLink}> Profile </NavLink>
    </div>
    <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}> Messages </NavLink>
    </div>
    <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}> News </NavLink>
    </div>
    <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}> Music </NavLink>
    </div>
    <div className={s.item}>
        <NavLink to="/setting" activeClassName={s.activeLink}> Settings </NavLink>
    </div>
        <div className={s.item}>
        <NavLink to="/users" activeClassName={s.activeLink}> Users </NavLink>
    </div>
        <div className={s.item}>
        <NavLink to="/login" activeClassName={s.activeLink}> Login </NavLink>
    </div>
    </nav>
}
export default Navbar;