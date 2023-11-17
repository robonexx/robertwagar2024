import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './intro.module.scss';
import IMG2 from '../../../../assets/images/robertwagar.jpg';
import Text from './text';
gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const introImageRef = useRef(null);
  const textRef = useRef(null);
  useLayoutEffect(() => {
    const introImg = introImageRef.current;
    const text = textRef.current;
    const timeline = gsap.timeline({
      ScrollTrigger: {
        trigger: document.documentElement,
        delay: 0,
        duration: 0.6,
        start: 'top',
        end: '+=500px',
        scrub: true,
        markers: true,
      },
    });

    timeline.from(
      introImg,
      { height: '100vh', width: '100vw', opacity: 0, delay: 0 },
      0
    ),
      timeline.to(introImg, {
        height: '200px',
        width: '100%',
        opacity: 1,
        duration: 0.6,
        delay: 0.5,
        filter: 'brightness(15%)',
      }),
      timeline.to(text, {
        opacity: 1,
        duration: 0.6,
      });
  }, []);

  return (
    <div className={styles.intro_wrapper}>
      <div className={styles.intro}>
        <div className={styles.image_wrapper} ref={introImageRef}>
          <img src={IMG2} alt='Robert Wägar' loading='lazy' />
        </div>
        <h1 className={styles.headline} ref={textRef}>
          [kɹiːˌe͡ɪtˈɪvɪti]
          {/* <Text /> */}
        </h1>
      </div>
    </div>
  );
};

export default Intro;
