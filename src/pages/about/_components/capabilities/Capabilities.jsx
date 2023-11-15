import { Reveal } from '../../../../components/animations/reveal/Reveal';
import { SlideInLeft } from '../../../../components/animations/reveal/SlideInLeft';
import ItemHeadline from '../../../../components/headline/ItemHeadline';
import styles from './capabilities.module.scss';
import Card from './card';

const cardData = [
  {
    name: 'HTML5',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg',
    desc: 'Standard markup language for creating web pages and web applications',
    link: 'https://www.w3schools.com/html/',
  },
  {
    name: 'CSS3',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg',
    desc: 'Style sheet language used for describing the presentation of a document written in HTML or XML',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'SASS',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    desc: 'Syntactically Awesome Style Sheets, an awesome CSS framework',
    link: 'https://sass-lang.com/',
  },
  {
    name: 'JavaScript',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    desc: 'High-level programming language that is commonly used to create interactive effects within web browsers',
    link: 'https://javascript.info/',
  },
  {
    name: 'React.js',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
    desc: 'JavaScript library for building user interfaces or UI components',
    link: 'https://react.dev/',
  },
  {
    name: 'Next.js',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
    desc: 'One of the main reasons to choose Next.js for full stack applications is its built-in server-side rendering capabilities and search engine optimization (SEO)',
    link: 'https://nextjs.org/',
  },
  {
    name: 'Node.js',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    desc: 'Open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser',
    link: 'https://nodejs.org/en',
  },
  {
    name: 'Git',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    desc: 'Free and open-source distributed version control system designed to handle everything from small to very large projects',
    link: 'https://git-scm.com/',
  },
  {
    name: 'Figma',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    desc: 'Cloud-based design and prototyping tool',
    link: 'https://www.figma.com/',
  },
  {
    name: 'Typescript',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    desc: 'Syntactic superset of JavaScript which adds static typing to the language',
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'MongoDB',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    desc: 'NoSQL document database that uses JSON-like documents with optional schemas',
    link: 'https://www.mongodb.com/',
  },
];

const Capabilities = () => {
  return (
    <div className={styles.capabilities}>
      <div className={styles.top}>
        <SlideInLeft>
          <ItemHeadline title='My capabilities ' />
        </SlideInLeft>
      </div>
      <Reveal>
        <section>
          {cardData.map((data) => (
            <Card {...data} />
          ))}
        </section>
        <p>
          Without fancy icons and desc: Vite, Supabase, Firebase, Sanity,
          Styled-components, Tailwind, Bootstrap, Vue, C# & Java fundamentals{' '}
        </p>
      </Reveal>
    </div>
  );
};

export default Capabilities;
