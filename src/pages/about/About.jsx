import PageTransition from '../../components/animations/PageTransition';
import BgEllipse from '../../components/bgellipse/BgEllipse';
import Headline from '../../components/headline/Headline';
import { Silhuette } from '../../components/silhuette/Silhuette';
import AboutMe from './_components/aboutme/AboutMe';
import MeButtons from './_components/mebuttons/MeButtons';
import styles from './about.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <PageTransition />
      <div className={styles.top_section}>
        <Headline title='About' />
        <MeButtons />
      </div>
      <Silhuette />
      <BgEllipse />
      <section className={styles.section}>
        <AboutMe />
      </section>
    </div>
  );
};

export default About;
