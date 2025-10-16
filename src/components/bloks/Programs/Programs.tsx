import style from './Programs.module.scss';

import program1 from '../../../assets/program1.pdf'
import program2 from '../../../assets/program2.pdf'
import program3 from '../../../assets/program3.pdf'
import program4 from '../../../assets/program4.pdf'
import program5 from '../../../assets/program5.pdf'
import program6 from '../../../assets/program6.pdf'
import program7 from '../../../assets/program7.pdf'
import program8 from '../../../assets/program8.pdf'
import program9 from '../../../assets/program9.pdf'

// Импортируем SVG как строки
import DownloadIconUrl from "../../../assets/download_icon.svg";

export type TFileToDownload = {
    name: string;
    link: string;
}

function Programs () {
    
    const DownloadItem = (props: TFileToDownload) => {
        const {name, link} = props
        return (
            <li className={style.instruction} key={name}>
                <div className={style.textWrap}>
                    <h3 className={style.name}>{name}</h3>
                </div>
                <div className={style.download}>
                    <button
                        onClick={() => {
                            const downloadLink = document.createElement("a");
                            downloadLink.href = link;
                            downloadLink.download = name;
                            downloadLink.target = "_blank";
                            document.body.appendChild(downloadLink);
                            downloadLink.click();
                            document.body.removeChild(downloadLink);
                        }}
                    >
                        <div className={style.icon__wrap}>
                            <img src={DownloadIconUrl} alt="Download" />
                        </div>
                    </button>
                </div>
            </li>
        )
    }

    const PUBLICS: TFileToDownload[] = [
        { name: "Здоровый образ жизни", link: program1 },
        { name: "Краеведение и туризм", link: program2 },
        { name: "Ландшафтный дизайн", link: program3 },
        { name: "Литературная гостиная", link: program4 },
        { name: "Музейные встречи", link: program5 },
        { name: "Основы краеведения", link: program6 },
        { name: "Основы психологии", link: program7 },
        { name: "Психология самопознания", link: program8 },
        { name: "Оказание первой доврачебной помощи", link: program9 },

    ]

    return (              
        <div className={style.docs}>
            <h2 className={style.title}>Обучающие программы</h2>
            <ul className={style.docs__wrap}>
                {PUBLICS.map((doc) => (
                    <DownloadItem key={doc.name} {...doc} />
                ))}
            </ul>
        </div>
    )
}

export default Programs