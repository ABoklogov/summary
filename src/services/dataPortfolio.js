export const aboutText = {
  ru: 'Я стремлюсь к постоянному росту и развитию в области frontend разработки, поэтому я всегда готов к новым вызовам и возможностям. Моя страсть к технологиям и желание создавать превосходные пользовательские интерфейсы позволяют мне быть эффективным и успешным frontend разработчиком. С моими работами можно ознакомиться на этой странице. Если вам нужна более подробная информация обо мне, вы можете посмотреть мое ',
  en: 'I strive for constant growth and development in the field of frontend development, so I am always ready for new challenges and opportunities. My passion for technology and desire to create excellent user experiences allows me to be an efficient and successful frontend developer. My works can be found on this page. If you want more information about me, you can look at my '
};

export const projects = {
  ru: [
    {
      name: 'Magic Forest',
      link: {
        text: 'magic-forest.netlify.app',
        url:'https://magic-forest.netlify.app/',
      },
      preText: 'В этом приложении реализована красивая 3D визуализация магического леса, дополненое плеером с тщательно подобранными тематическими треками.',
      description: 'Не стоит серьезно относиться к данному сайту. Я его сделал, чтобы самому попробовать поработать с 3D перспективой и показать возможности современного CSS.',
      tehnology: ['HTML', 'CSS', 'JS', 'Vue.js', 'Parcel'],
      linkFiles: {
        text: 'github.com/ABoklogov/magicForest',
        url: 'https://github.com/ABoklogov/magicForest',
      },
      picture: require('@/assets/images/projects/magicForest.jpg'),
      backgroundColor: 'rgba(147, 171, 151, .3)',
    }
  ],
  en: [
    {
      name: 'Magic Forest',
      link: {
        text: 'magic-forest.netlify.app',
        url:'https://magic-forest.netlify.app/',
      },
      preText: 'This application features a beautiful 3D visualization of a magical forest, complemented by a player with carefully selected thematic tracks.',
      description: "Don't take this site seriously. I made it to try to work with 3D perspective myself and show the capabilities of modern CSS.",
      tehnology: ['HTML', 'CSS', 'JS', 'Vue.js', 'Parcel'],
      linkFiles: {
        text: 'github.com/ABoklogov/magicForest',
        url: 'https://github.com/ABoklogov/magicForest',
      },
      picture: require('@/assets/images/projects/magicForest.jpg'),
      backgroundColor: 'rgba(147, 171, 151, .3)',
    }
  ]
};