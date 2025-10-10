import logo from "../../../assets/logo.png"

import style from './logo.module.scss';

function Logo () {
    return(
            <img className={style.logoImg} src={logo} alt='Fototapete logo' />
    ) 
}

export default Logo