import VKPostEmbed from '../VKPostEmbed/VKPostEmbed';
import style from './News.module.scss';

export const NEWS_LINK = [
  // СЮДА НОВЫЕ
      { 
    id: "112265186_22564", 
    hash: "Eqz0QnHMuGvkafuYDD2oPUJ3TylO" 
  },
      { 
    id: "112265186_22465", 
    hash: "tHauLMv2i3d_qMbgsCPNEXFavy6g" 
  },
  { 
    id: "152568230_17092", 
    hash: "sANl-O1JNPLy5mi63rMqGdyZDkQk" 
  },
    { 
    id: "112265186_22418", 
    hash: "HSw3yXzawTG4IpNV6djOEjZHxWfq" 
  },
  { 
    id: "112265186_22158", 
    hash: "pkuLkWQse2tkUrAErIJmhFkpM71v" 
  },
  { 
    id: "112265186_22152", 
    hash: "q3S9smxvLtJaAAxxJPZN-CCTDuYx" 
  },
  { 
    id: "112265186_21988", 
    hash: "-Dlj-anFIrEF6DmoZ5yrovxJ3AqM" 
  },
    { 
    id: "212965583_5992", 
    hash: "5gba8Mm2ReKl8erIbraOnH_z1Ppv"
  },
    { 
    id: "212965583_6029", 
    hash: "jd-gibyp6cdxGFYc8kyNub5MRDOh" 
  },
    { 
    id: "112265186_22079", 
    hash: "eNoWWUvRLm7MWJm1glEYmqfWiHuR" 
  },
    { 
    id: "112265186_22465", 
    hash: "tHauLMv2i3d_qMbgsCPNEXFavy6g" 
  },
    { 
    id: "112265186_22564", 
    hash: "Eqz0QnHMuGvkafuYDD2oPUJ3TylO" 
  },


  // { 
  //   id: "152568230_17092", 
  //   hash: "sANl-O1JNPLy5mi63rMqGdyZDkQk" 
  // },
  //   { 
  //   id: "112265186_22418", 
  //   hash: "HSw3yXzawTG4IpNV6djOEjZHxWfq" 
  // },
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