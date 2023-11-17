export const aboutText = {
  ru: 'Я стремлюсь к постоянному росту и развитию в области frontend разработки, поэтому я всегда готов к новым вызовам и возможностям. Моя страсть к технологиям и желание создавать превосходные пользовательские интерфейсы позволяют мне быть эффективным frontend разработчиком. С моими работами можно ознакомиться ниже. Здесь представлены только те проекты, которые были завершены и уже выполняют свою функцию. Если вам нужна более подробная информация обо мне, вы можете посмотреть мое ',
  en: 'I strive for constant growth and development in the field of frontend development, so I am always ready for new challenges and opportunities. My passion for technology and desire to create excellent user experiences allows me to be an efficient frontend developer. My works can be found below. Only those projects that have been completed and are already fulfilling their function are presented here. If you want more information about me, you can look at my '
};

export const footerText = {
  ru: 'При разработке данного веб-сайта использованы технологии: Vue.js, Pinia, Vue Router, Vite, Sass, реализована адаптивная верстка. Исходные файлы доступны с открытым исходным кодом. Вы можете ознакомиться с ними по ',
  en: 'When developing this website, the following technologies were used: Vue.js, Pinia, Vue Router, Vite, Sass, adaptive layout was implemented. The source files are available as open source. You can view them at the '
};

export const linkThisProject = 'https://github.com/ABoklogov/summary';

export const projects = {
  ru: [
    {
      name: 'Микрос',
      link: {
        text: 'микрос.рф',
        url: 'https://xn--h1aeekjh.xn--p1ai/'
      },
      preText:
        'Коммерческий проект интернет-магазина по продаже товаров для праздника (60 000 товаров, 24 филиала по всей России).',
      tehnology: ['HTML', 'CSS', 'JS', 'PHP', 'Vue.js', 'Vuex', 'Bitrix 1C'],
      linkFiles: null,
      description:
        'Данным проектом я занимался последние пару лет, фронт которого реализован на компонентах Vue 2, бекенд на PHP. Реализована адаптивная, кроссбраузерная верстка для всех устройств (десктоп, планшет и мобильные). В процессе работы был полностью переработан весь код Vue, а также дизайн сайта, что позволило улучшить скоростные показатели загрузки страниц с 4 секунд до менее 1 секунды.',
      picture: require('@/assets/images/projects/mikros.jpg'),
      backgroundColor: 'rgba(58, 145, 206, .15)'
    },
    {
      name: 'Magic Forest',
      link: {
        text: 'magic-forest.netlify.app',
        url: 'https://magic-forest.netlify.app/'
      },
      preText:
        'В этом приложении реализована красивая 3D визуализация магического леса, дополненое плеером с тщательно подобранными тематическими треками.',
      tehnology: ['HTML', 'CSS', 'JS', 'Vue.js', 'Parcel'],
      linkFiles: {
        text: 'github.com/ABoklogov',
        url: 'https://github.com/ABoklogov/magicForest'
      },
      description:
        'Не стоит серьезно относиться к данному сайту. Я его сделал, чтобы самому попробовать поработать с 3D перспективой и показать возможности современного CSS.',
      picture: require('@/assets/images/projects/magicForest.jpg'),
      backgroundColor: 'rgba(147, 171, 151, .3)'
    }
  ],
  en: [
    {
      name: 'Mikros',
      link: {
        text: 'mikros.ru',
        url: 'https://xn--h1aeekjh.xn--p1ai/'
      },
      preText:
        'A commercial project for an online store selling holiday goods (60,000 products, 24 branches throughout Russia).',
      tehnology: ['HTML', 'CSS', 'JS', 'PHP', 'Vue.js', 'Vuex', 'Bitrix 1C'],
      linkFiles: null,
      description:
        'I have been working on this project for the last couple of years, the front of which is implemented on Vue 2 components, the backend on PHP. Implemented adaptive, cross-browser layout for all devices (desktop, tablet and mobile). During the work, the entire Vue code was completely redesigned, as well as the site design, which made it possible to improve page loading speeds from 4 seconds to less than 1 second.',
      picture: require('@/assets/images/projects/mikros.jpg'),
      backgroundColor: 'rgba(58, 145, 206, .15)'
    },
    {
      name: 'Magic Forest',
      link: {
        text: 'magic-forest.netlify.app',
        url: 'https://magic-forest.netlify.app/'
      },
      preText:
        'This application features a beautiful 3D visualization of a magical forest, complemented by a player with carefully selected thematic tracks.',
      tehnology: ['HTML', 'CSS', 'JS', 'Vue.js', 'Parcel'],
      linkFiles: {
        text: 'github.com/ABoklogov',
        url: 'https://github.com/ABoklogov/magicForest'
      },
      description:
        "Don't take this site seriously. I made it to try to work with 3D perspective myself and show the capabilities of modern CSS.",
      picture: require('@/assets/images/projects/magicForest.jpg'),
      backgroundColor: 'rgba(147, 171, 151, .3)'
    }
  ]
};
