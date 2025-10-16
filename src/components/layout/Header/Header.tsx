import { NavLink } from 'react-router';
import Logo from '../../ui/Logo/Logo';
import style from './header.module.scss';

function Header () {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <NavLink to={'utv/'} end>
                    <Logo />
                </NavLink>
            </div>
            <hgroup className={style.headers}>
                <h1 className={style.h1}>Университет третьего возраста</h1>
                <h2 className={style.h2}>Проект СПР Кировской области</h2>
            </hgroup>
        </header>
    )
}

export default Header;