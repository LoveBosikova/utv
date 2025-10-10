import style from './numbers.module.scss';

function Numbers () {

return (
    <div  className={style.numbers}>
        <h1 className={style.title}>Члены организации на 2024 г.:</h1>
        <ul className={style.list}>
            <li className={style.text}>3350 активных членов (по анкетам),</li>
            <li className={style.text}>{">5000 сторонников."}</li>
        </ul>
    </div>
    )
}

export default Numbers