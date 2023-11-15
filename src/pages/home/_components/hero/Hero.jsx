// styles
import SideScroll from '../sidescroll/SideScroll';
import Intro from '../intro/Intro';
import IntroText from '../intro/IntroText';
import styles from './hero.module.scss';
import BgEllipse from '../../../../components/bgellipse/BgEllipse';
import RobSvg from '../robsvg/RobSvg';

// eslint-disable-next-line react/prop-types
const Hero = () => {
  return (
    <div className={styles.hero}>
      <BgEllipse />
    <RobSvg />
      <Intro />
      <IntroText />
      <SideScroll />
    </div>
  );
};

export default Hero;
