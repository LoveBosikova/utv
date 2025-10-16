import style from './navigation.module.scss';
import { NavLink } from 'react-router';

function Navigation () {

    return (
        <nav className={style.navigation}>
            <ul className={style.linksWrap}>
                <NavLink to={'utv/about'} end>
                    <li className={style.linkWrap}><p className={style.link}>О нас</p></li>
                </NavLink>
                <NavLink to={'utv/meet'} end>
                    <li className={style.linkWrap}><p className={style.link}>Давайте знакомиться</p></li>
                </NavLink>
                <NavLink to={'utv/story'} end>
                    <li className={style.linkWrap}><p className={style.link}>История УТВ</p></li>
                </NavLink>
                <NavLink to={'utv/programs'} end>
                    <li className={style.linkWrap}><p className={style.link}>Образовательные программы</p></li>
                </NavLink>
                <NavLink to={'utv/other'} end>
                    <li className={style.linkWrap}><p className={style.link}>Не только учёба</p></li>
                </NavLink>
                <NavLink to={'utv/teachers'} end>
                    <li className={style.linkWrap}><p className={style.link}>Преподаватели</p></li>
                </NavLink>
                <NavLink to={'utv/faces'} end>
                    <li className={style.linkWrap}><p className={style.link}>УТВ в лицах</p></li>
                </NavLink>
                <NavLink to={'utv/media'} end>
                    <li className={style.linkWrap}><p className={style.link}>Фото и видео</p></li>
                </NavLink>                
                <NavLink to={'utv/contacts'} end>
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