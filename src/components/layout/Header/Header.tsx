import { NavLink } from 'react-router';
import Logo from '../../ui/Logo/Logo';
import style from './header.module.scss';

function Header () {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <NavLink to={'/'} end>
                    <Logo />
                </NavLink>
            </div>
            <hgroup className={style.headers}>
                <h1 className={style.h1}>Союз пенсионеров России</h1>
                <h2 className={style.h2}>Кировская область</h2>
            </hgroup>
        </header>
    )
}

export default Header;