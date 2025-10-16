import main from "../../../assets/spr-main.jpg";
import style from './about.module.scss';
import cn from 'classnames';

function About () {

return (
    <>
        <div  className={cn(style.wrapper, style.parallax)}>
            <div className={cn(style.parallax_layer, style.parallax_image)}>
                <img src={main} alt="Сад изящных слов" />
            </div>
            <span className={cn(style.parallax_layer, style.parallax_text)}><p>Образование</p><p>через всю</p><p>жизнь</p></span>
        </div>
        <div className={style.slogan}>
            <p>
                Если Вы активны и молоды душой, стремитесь получать новые знания и умения, расширять и углублять имеющиеся, а также быть социально активным и получать удовольствие от общения – этот сайт для Вас!
            </p>

        </div>
    </>
    )
}

export default About