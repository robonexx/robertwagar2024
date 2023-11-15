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
        Coming soon...
      </Reveal>
    </div>
  );
};

export default Education;
