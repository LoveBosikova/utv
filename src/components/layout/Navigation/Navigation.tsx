import style from './navigation.module.scss';
import { NavLink } from 'react-router';

function Navigation () {

    return (
        <nav className={style.navigation}>
            <ul className={style.linksWrap}>
                <NavLink to={'/about'} end>
                    <li className={style.linkWrap}><p className={style.link}>О нас</p></li>
                </NavLink>
                <NavLink to={'/projects'} end>
                    <li className={style.linkWrap}><p className={style.link}>Наши проекты</p></li>
                </NavLink>
                <NavLink to={'/partners'} end>
                    <li className={style.linkWrap}><p className={style.link}>Партнёры</p></li>
                </NavLink>
                <NavLink to={'/public'} end>
                    <li className={style.linkWrap}><p className={style.link}>Отчёты</p></li>
                </NavLink>
                <NavLink to={'/sertificates'} end>
                    <li className={style.linkWrap}><p className={style.link}>Награды</p></li>
                </NavLink>
                <NavLink to={'/contacts'} end>
                    <li className={style.linkWrap}><p className={style.link}>Контакты</p></li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Navigation;

// О нас 
// Наши проекты
// Партнёры
// Отчёты
// Награды
// Контакты