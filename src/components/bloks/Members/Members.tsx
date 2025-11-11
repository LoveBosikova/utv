import style from './members.module.scss';
import tebenkova from '../../../assets/tebenkova.jpg'
import toporova from '../../../assets/toporova.jpg'
import homyakova from '../../../assets/homyakova.jpg'
import shilyaeva from '../../../assets/shilyaeva.jpg'
import dolmatova from '../../../assets/dolmatova.jpg'
import ershova from '../../../assets/ershova.jpg'
import zhenihova from '../../../assets/zhenihova.jpg'
import kiselev from '../../../assets/kiselev.jpg'
// import member9 from '../../../assets/envir9.jpg'
import kiseleva from '../../../assets/kiseleva.jpg'
import kolesnikova from '../../../assets/kolesnikova.jpg'
import korkin from '../../../assets/korkin.jpg'
import ponomareva from '../../../assets/ponomareva.jpg'
import sidorova from '../../../assets/sidorova.jpg'

function Members () {

    const MEMBERS = [
    {
        fullName: "Колесникова Ольга Сергеевна. Председатель РО ООО СПР по Кировской области, зам. председателя Общественного совета при Министерстве культуры Кировской области",
        photo: kolesnikova,
    },
    {
        fullName: "Сидорова Ольга Владимировна. Заместитель председателя Правления РО ООО СПР по Кировской области, координатор волонтеров Благотворительного фонда «Zа Вятку»",
        photo: sidorova,
    },
    {
        fullName: "Шиляева Наталья Петровна. Заместитель председателя Правления РО ООО СПР, зам. управляющего ОСФР по Кировской области",
        photo: shilyaeva,
    },
    {
        fullName: "Долматова Елена Васильевна. Специалист по связям со СМИ, координатор проектов «Университет третьего возраста»",
        photo: dolmatova,
    },
    {
        fullName: "Ершова Нина Николаевна. Член Общественной палаты Кировской области 2024-2028 гг., директор ЧУДО РСП \"Центр социально-психологической помощи детям, подросткам и молодежи\"",
        photo: ershova,
    },
    {
        fullName: "Женихова Надежда Петровна. Председатель МО СПР по Кирово-Чепецкому району",
        photo: zhenihova,
    },
    {
        fullName: "Киселёва Людмила Алексеевна. Председатель МО СПР по Оричевскому району",
        photo: kiseleva,
    },
    {
        fullName: "Тебенькова Алевтина Лаврентьевна. Председатель МО СПР по Афанасьевскому району",
        photo: tebenkova,
    },
    {
        fullName: "Топорова Светлана Александровна. Председатель МО СПР по г. Кирову",
        photo: toporova,
    },
    {
        fullName: "Хомякова Любовь Егоровна. Председатель МО СПР по Шабалинскому району",
        photo: homyakova,
    },
    {
        fullName: "Коркин Владислав Сергеевич. Член МО СПР по г. Кирову",
        photo: korkin,
    },
    {
        fullName: "Киселёв Владимир Игоревич. Член МО СПР по г. Кирову, заслуженный работник культуры",
        photo: kiselev,
    },
    {
        fullName: "Пономарева Наталья Владимировна. Член МО СПР по Нолинскому району, руководитель клиентской службы ОСФР в Нолинском районе",
        photo: ponomareva,
    }
];

return (
    <div  className={style.members}>
        <h1 className={style.title}>Члены правления</h1>
        <ul className={style.list}>
            {MEMBERS.map((member) => <li className={style.member} key={member.photo}>
                {member.fullName}
                <div className={style.imgWrap}>
                    <img className={style.img} src={member.photo} alt={member.fullName} />
                </div>
                </li>)}
        </ul>
    </div>
    )
}

export default Members