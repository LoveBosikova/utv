import Feedback from "../../bloks/Feedback/Feedback";
import Sertificates from "../../bloks/Sertificates/Sertificates"
import style from './SertificatePage.module.scss';

function SertificatePage() {

return (
    <div className={style.sertificatePage}>
    <h1 className={style.title}>Наши награды и сертификаты</h1>
        <Sertificates />
        <Feedback />
    </div>
    )
}

export default SertificatePage