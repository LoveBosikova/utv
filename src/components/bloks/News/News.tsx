import VKPostEmbed from '../VKPostEmbed/VKPostEmbed';
import style from './News.module.scss';

// export const NEWS_LINK: string[] = [
//     // "112265186_21898",
//     "212965583_5992",
//     // "212965583_6029"
// ];

export const NEWS_LINK = [
  { 
    id: "212965583_6029", 
    hash: "jd-gibyp6cdxGFYc8kyNub5MRDOh" 
  },
  { 
    id: "212965583_5992", 
    hash: "5gba8Mm2ReKl8erIbraOnH_z1Ppv"
  },
    { 
    id: "112265186_21988", 
    hash: "-Dlj-anFIrEF6DmoZ5yrovxJ3AqM" 
  },
];

function News() {
    return (
        <div className={style.members}>
            <h1 className={style.title}>Новости</h1>
            <ul className={style.list}>
                {NEWS_LINK.map((post) => (
                    // <VKPostEmbed postId={news} />
                    <VKPostEmbed 
                        postId={post.id} 
                        hash={post.hash} 
                        />
                ))}
            </ul>
            
        </div>
    );
}

export default News;