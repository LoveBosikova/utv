// import React, { useEffect } from 'react';
// import type { JSX } from "react";

// interface VKPostWidgetProps {
//   postId: string;
// }

// const VKPostEmbed = ({ postId }: VKPostWidgetProps): JSX.Element => {
//   useEffect(() => {
//     // Добавляем скрипт только если VK еще не загружен
//     // @ts-ignore
//     if (!window.VK) {
//       const script = document.createElement('script');
//       script.src = "https://vk.com/js/api/openapi.js?173";
//       script.async = true;
//       script.onload = () => {
//         // @ts-ignore
//         VK.Widgets.Post("vk_post_-212965583_6029", -212965583, 6029, 'jd-gibyp6cdxGFYc8kyNub5MRDOh');
//       };
//       document.head.appendChild(script);
//     } else {
//       // @ts-ignore
//     //   VK.Widgets.Post("vk_post_-212965583_6029", -212965583, 6029, 'jd-gibyp6cdxGFYc8kyNub5MRDOh');
//     }
//   }, []);

//   return <div id="vk_post_-212965583_6029"></div>;
// };

// export default VKPostEmbed;


import { useEffect } from 'react';
import type { JSX } from "react";

interface VKPostWidgetProps {
  postId: string; // Формат: "212965583_6029"
  hash: string;   // Хеш для доступа к посту
}

const VKPostEmbed = ({ postId, hash }: VKPostWidgetProps): JSX.Element => {
  useEffect(() => {
    // Парсим ID поста
    const parts = postId.split('_');
    if (parts.length !== 2) {
      console.error('Invalid postId format:', postId);
      return;
    }

    const groupId = parts[0]; // "212965583"
    const postNum = parts[1]; // "6029"
    
    // Формируем параметры
    const containerId = `vk_post_-${groupId}_${postNum}`;
    const ownerId = -parseInt(groupId);
    const postIdNum = parseInt(postNum);

    console.log('Loading VK post:', { containerId, ownerId, postIdNum, hash });

    // Функция для инициализации виджета
    const initWidget = () => {
      // @ts-ignore
      if (window.VK && window.VK.Widgets) {
        // @ts-ignore
        window.VK.Widgets.Post(containerId, ownerId, postIdNum, hash);
      }
    };

    // Добавляем скрипт только если VK еще не загружен
    // @ts-ignore
    if (!window.VK) {
      const script = document.createElement('script');
      script.src = "https://vk.com/js/api/openapi.js?173";
      script.async = true;
      script.onload = initWidget;
      document.head.appendChild(script);
    } else {
      initWidget();
    }
  }, [postId, hash]); // Зависимости: postId и hash

  const containerId = `vk_post_-${postId.replace('_', '_')}`;
  
  return <div id={containerId}></div>;
};

export default VKPostEmbed;