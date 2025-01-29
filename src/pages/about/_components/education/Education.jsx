import { Reveal } from '../../../../components/animations/reveal/Reveal';
import { SlideInLeft } from '../../../../components/animations/reveal/SlideInLeft';
import ItemHeadline from '../../../../components/headline/ItemHeadline';
import styles from './education.module.scss';

const Education = () => {
  return (
    <div className={styles.education}>
      <div>
        <SlideInLeft>
          <ItemHeadline title='Education' />
        </SlideInLeft>
      </div>
      <Reveal>
        <div className={styles.info}>
          <h2>Frontend developer </h2>
          <h4>2 year education</h4>
        <h4>at Changemaker educations</h4>
        </div>
      </Reveal>
    </div>
  );
};

export default Education;
