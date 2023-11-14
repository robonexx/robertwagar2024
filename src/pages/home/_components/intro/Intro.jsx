import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './intro.module.scss';
import IMG2 from '../../../../assets/images/robertwagar.jpg';
gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const introImageRef = useRef(null);

  useLayoutEffect(() => {

    const introImg = introImageRef.current
    const timeline = gsap.timeline({
      ScrollTrigger: {
        trigger: document.documentElement,
        start: 'top',
        end: '+=500px',
        scrub: true,
        markers: true,
      },
    });

    timeline.from(
      introImg,
      { height: '100vh', width: '100vw', opacity: 0 },
      0
    );
    timeline.to(
      introImg,
      { height: '200px', width: '80vw', opacity: 1, duration: 0.6, delay: 2, filter: 'brightness(15%)' },
      0
    );
  }, []);

  return (
    <div className={styles.intro_wrapper}>
      <div className={styles.intro}>
        <div
          className={styles.image_wrapper}
          data-scroll
          data-scroll-speed='0.3'
          ref={introImageRef}
        >
          <img src={IMG2} alt='Robert Wägar' loading='lazy' />
        </div>
        <h1 className={styles.headline} data-scroll data-scroll-speed='-0.3'>
           [kɹiːˌe͡ɪtˈɪvɪti]
        </h1>
      </div>
    </div>
  );
};

export default Intro;
