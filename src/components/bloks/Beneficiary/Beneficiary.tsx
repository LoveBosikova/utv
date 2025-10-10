import style from './beneficiary.module.scss';

function Beneficiary () {

return (
    <div  className={style.beneficiary}>
        <h1 className={style.title}>Благополучатели и членство</h1>
        <article>
            <p className={style.text}>Благополучатели — лица пенсионного возраста, проживающие на территории  Кировской области. На 2024г. в области 411 441 пенсионеров, это составляет 36% населения</p>
            <p className={style.text}>Членство в организации и выход из неё добровольные, приём проходит на основании личного заявления. Принимаются пенсионеры и другие граждане старше 18 лет, готовые принять личное участие в работе организации.</p>
        </article>
    </div>
    )
}

export default Beneficiary