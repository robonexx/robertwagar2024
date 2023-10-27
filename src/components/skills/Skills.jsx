import styles from './skills.module.scss';
import Gta1 from '../../assets/images/gtaimage/gta1.jpg';
import Gta2 from '../../assets/images/gtaimage/gta2.jpg';
import Gta3 from '../../assets/images/gtaimage/gta3.jpg';
import Gta4 from '../../assets/images/gtaimage/gta4.jpg';
import Gta5 from '../../assets/images/gtaimage/gta5.jpg';
import Gta6 from '../../assets/images/gtaimage/gta6.jpg';
import Js from '../../assets/images/techimages/js.png';
import Html from '../../assets/images/techimages/html.png';
import Css from '../../assets/images/techimages/css.png';
import ReactImg from '../../assets/images/techimages/react.png';
import Node from '../../assets/images/techimages/node.png';
import Github from '../../assets/images/techimages/github.png';
import SkillCard from './SkillsCard';

const data = [
  {
    imageFront: Gta1,
    imageBack: Html,
  },
  {
    imageFront: Gta2,
    imageBack: Css,
  },
  {
    imageFront: Gta3,
    imageBack: Js,
  },
  {
    imageFront: Gta4,
    imageBack: ReactImg,
  },
  {
    imageFront: Gta5,
    imageBack: Node,
  },
  {
    imageFront: Gta6,
    imageBack: Github,
  },
];

const Skills = () => {
  return (
    <div className={styles.card_container}>
      {data.map((c, i) => (
        // eslint-disable-next-line react/jsx-key
        <SkillCard {...c} key={i} />
      ))}
    </div>
  );
};

export default Skills;
