import { useState } from 'react';
import PageTransition from '../../components/animations/PageTransition';
import BgEllipse from '../../components/bgellipse/BgEllipse';
import Headline from '../../components/headline/Headline';
import { Silhuette } from '../../components/silhuette/Silhuette';
import AboutMe from './_components/aboutme/AboutMe';
import Capabilities from './_components/capabilities/Capabilities';
import Education from './_components/education/Education';
import MeButtons from './_components/mebuttons/MeButtons';
import styles from './about.module.scss';

const categories = ['me', 'capabilities', 'education'];

const About = () => {
  const [category, setCategory] = useState('me');

  const ShowCategory = (category) => {
    switch (category) {
      case 'me':
        return <AboutMe />;
      case 'capabilities':
        return <Capabilities />;
      case 'education':
        return <Education />;
      default:
        return null; // or handle an unknown category
    }
  };

  return (
    <div className={styles.about}>
      <PageTransition />
      <div className={styles.top_section}>
        <Headline title='About' />
        <MeButtons setCategory={setCategory} />
      </div>
      <Silhuette />
      <BgEllipse />
      <section className={styles.section}>{ShowCategory(category)}</section>
    </div>
  );
};

export default About;
