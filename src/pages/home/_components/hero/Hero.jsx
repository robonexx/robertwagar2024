import { useState } from 'react';

import SideScroll from '../sidescroll/SideScroll';
import Intro from '../intro/Intro';
import IntroText from '../intro/IntroText';
import styles from './hero.module.scss';
import BgEllipse from '../../../../components/bgellipse/BgEllipse';
import ScrollIndicator from '../../../../components/scrolldown/ScrollIndicator';
import RobSvg from '../robsvg/RobSvg';

// eslint-disable-next-line react/prop-types
const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={styles.hero}>
      <BgEllipse />
      {isLoading ? <RobSvg setIsLoading={setIsLoading} /> : <div></div>}
      <IntroText />
      <SideScroll />
      <ScrollIndicator />
    </div>
  );
};

export default Hero;
