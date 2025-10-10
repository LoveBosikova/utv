import style from './ContactPage.module.scss';

function ContactPage() {

return (
    <div className={style.contactPage}>
        <h1 className={style.title}>Региональное отделение  общероссийской  общественной  организации  «Союз пенсионеров России» по Кировской области</h1>
        <h2 className={style.h2}>Адрес</h2>
        <p className={style.text}>610001 г. Киров, ул. Комсомольская, д.34, к.111 </p>    
        <h2 className={style.h2}>Телефон</h2>
        <p className={style.text}>(8332) 528-222</p>    
        <h2 className={style.h2}>ВКонтакте</h2>
        <p className={style.text}>vk.com/tretiy_vozrast</p>
        <h2 className={style.h2}>Электронная почта</h2>
        <p className={style.text}>odnt1957@mail.ru</p>
    </div>
    )
}

export default ContactPage