import IMG1 from '../../assets/images/projectimages/vga.png';
import IMG2 from '../../assets/images/projectimages/lockerlegends.png';
import IMG3 from '../../assets/images/projectimages/netnewsimage.png';
import IMG4 from '../../assets/images/projectimages/games.png';
import IMG5 from '../../assets/images/projectimages/sl_bike.png';
import IMG6 from '../../assets/images/projectimages/funkcamp.png';
import IMG10 from '../../assets/images/projectimages/gamedashboard.png';

export const productData = [
  {
    title: 'Game Puls',
    year: '2023',
    tag: '#website #re-desing #in-production',
    tech: 'React, Vite, Styled-components, Framer-motion',
    desc: 'A gaming dashboard, implementation of ux design, challenge to try to remake a desing without actually checking the sizes and margins, paddings etc. Just using the images and resources and recreating, adding functions to the dashboard',
    id: 1,
    image: IMG10,
    github: 'https://github.com/robonexx/vga-dashboard',
    demo: 'https://',
  },
  {
    title: 'Funkcamp 2024',
    year: '2023',
    tag: '#website #desing #in-production',
    tech: 'Nextjs, sass',
    desc: 'Website for a dance camp called funkcamp, this page had to have information about the camp, teacher section and a form to be able to ask questions and register.',
    id: 3,
    image: IMG6,
    github: 'https://github.com/robonexx/funkcamp2024',
    demo: 'https://funkcamp2024.vercel.app/',
  },
  {
    title: 'VGA',
    year: '2022',
    tag: '#website #api',
    tech: 'Javascript, Html, Css',
    desc: 'Video Game Archives, is a website project done for the game lovers. It is a video game search engine using the RAWG, io, api, the project is done in vanilla js, html and css. You can try the demo or check the repo. Have fun',
    id: 5,
    image: IMG1,
    github: 'https://github.com/robonexx/vga2023',
    demo: 'https://vga2023.surge.sh/',
  },
  {
    title: 'LockerLegends',
    year: '2022',
    tag: '#website #re-design #project-managment',
    tech: 'Javascript, Html, Css',
    desc: 'This project was a remake of the https://lockerlegends.net website. Tech used next js, wordpress, sass, framer-motion. You can check the live demo and the repo. You can read more on my github about the problems i had to solve in this project',
    id: 7,
    image: IMG2,
    github: 'https://github.com/robonexx/lockerlegends2022',
    demo: 'https://www.lockerlegends.org/',
  },
  {
    title: 'Net News',
    year: '2023',
    tag: '#website #api',
    tech: 'Typescript, React, Vite, sass(modules), restApi',
    desc: 'Net News was a project I created to learn and practice typescript, work with rest apis and sass, It is a News website using the guardian api, Also I experimented with a new kind of navigation style.',
    id: 11,
    image: IMG3,
    github: 'https://github.com/robonexx/netnews',
    demo: 'https://netnews23.vercel.app/',
  },
  {
    title: 'Gamez',
    year: '2022',
    tag: '#website #games',
    tech: 'Javascript, Html, Css',
    desc: 'This project was to practice on javascript, html and css, the goal was to create one game, and it ended up being 2 games. Rock, Paper, Scissors and a word guessing game. Fun Fun Fun',
    id: 13,
    image: IMG4,
  },
  {
    title: 'SL Bikes',
    year: '2021',
    tag: '#website #ux #prototyping',
    tech: 'React, styled-component, mapbox, higher order functions, ux, ui',
    desc: 'This project was an implementation of ux. The idea was to improve on an existing product or service, and do research about it. I choose S L Stockholm commuter transportation, adding bikes as a new way to travel including in the monthly card for SL',
    id: 14,
    image: IMG5,
  },
];
