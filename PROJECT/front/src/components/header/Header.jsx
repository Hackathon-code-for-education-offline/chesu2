import React from 'react';
import styles from './Header.module.css';
import {Logo} from '../logo/Logo'
import {useTheme} from '../../hooks/useTheme';

import {SwitchToggle} from '../generic/switch_toggle/SwitchToggle'
import {Button} from '../generic/button/Button';
import {Link} from "react-router-dom";
import {useAuthStore} from "../../store/auth";



export function Header() {
    return (
        <header className={styles.header}>
            <HeaderContent></HeaderContent>
        </header>
    );
}

function HeaderContent(){
    return (
        <div className={styles.headerContent}>
            <Logo></Logo>
            <Navigations></Navigations>
        </div>
    );
}

function Navigations(){

    const { theme, setTheme } = useTheme()

    function switchTheme(isChecked) {
        setTheme(isChecked ? 'dark' : 'light')
    }
    const isChecked = theme === 'dark'

    const [isLoggedIn, user] = useAuthStore((state) => [
        state.isLoggedIn,
        state.user,
    ]);

    return (
        <div className={styles.navigations}>
            {/*<SwitchToggle isChecked={isChecked} onChecked={switchTheme}></SwitchToggle>*/}
            
            <NavigationItem title={'Главная'} to={'/'}></NavigationItem>
            <NavigationItem title={'Унивситеты'} to={'/universitylist'}></NavigationItem>
            <NavigationItem title={'Корзина'} to={'/basket'}></NavigationItem>



            {isLoggedIn() ?
                <NavigationItem title={user().username} to={'/logout'}></NavigationItem> : <NavigationItem title={'Войти'} to={'/login'}></NavigationItem>}
        </div>
    );
}

function NavigationItem({title, to}){
    return (
        <Link to={to} className={styles.navigationItem}>
            {title}
        </Link>
    );
}