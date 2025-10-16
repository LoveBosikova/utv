import style from './PublicBlock.module.scss';

import public1 from '../../../assets/public2021.pdf'
import public2 from '../../../assets/public2022.pdf'
import public3 from '../../../assets/public2023.pdf'
import public4 from '../../../assets/public2024.pdf'

// Импортируем SVG как строки
import DownloadIconUrl from "../../../assets/download_icon.svg";

export type TFileToDownload = {
    name: string;
    link: string;
}

function PublicBlock () {
    
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
        { name: "Публичный отчет 2021", link: public1 },
        { name: "Публичный отчет 2022", link: public2 },
        { name: "Публичный отчет 2023", link: public3 },
        { name: "Публичный отчет 2024", link: public4 }
    ]

    return (              
        <div className={style.docs}>
            <h2 className={style.title}>Публичные отчёты</h2>
            <ul className={style.docs__wrap}>
                {PUBLICS.map((doc) => (
                    <DownloadItem key={doc.name} {...doc} />
                ))}
            </ul>
        </div>
    )
}

export default PublicBlock