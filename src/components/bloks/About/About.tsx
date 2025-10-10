import main from "../../../assets/spr-main.jpg";
import style from './about.module.scss';
import cn from 'classnames';

function About () {

return (
    <div  className={cn(style.wrapper, style.parallax)}>
        <div className={cn(style.parallax_layer, style.parallax_image)}>
            <img src={main} alt="Сад изящных слов" />
        </div>
        <span className={cn(style.parallax_layer, style.parallax_text)}>Наша миссия — удовлетворение потребностей старшего поколения в знаниях, творчестве, физической активности, участии в жизни общества.</span>
    </div>
    )
}

export default About