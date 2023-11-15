import ItemHeadline from '../../../../components/headline/ItemHeadline';
import styles from './aboutme.module.scss';
import EYE from '../../../../assets/images/eye.png';
import LetterAnimation from '../../../../components/animations/letterAnimation/LetterAnimaion';
import { Reveal } from '../../../../components/animations/reveal/Reveal';
import { SlideInLeft } from '../../../../components/animations/reveal/SlideInLeft';

const AboutMe = () => {
  return (
    <div className={styles.aboutme}>
      <div>
        <SlideInLeft>
          <ItemHeadline title='Me myself & ' />{' '}
          <img src={EYE} alt='an eye icon'></img>
        </SlideInLeft>
      </div>
      <Reveal>
        <p>
          Greetings! I&apos;m Robert Wägar, a creative frontend developer based
          in Stockholm. With a natural curiosity, I continuously seek new
          opportunities for learning and personal development. When I dive into
          new projects, I like to keep things organized, letting creativity flow
          naturally.
          <br />
          <br />
          Beyond coding, I find immense pleasure in spending time with my family
          and friends. Additionally, I have a fondness for dancing and listening
          to some good music, the joy of life.
        </p>
      </Reveal>
    </div>
  );
};

export default AboutMe;
