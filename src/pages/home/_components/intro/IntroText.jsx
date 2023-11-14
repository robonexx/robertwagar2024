/* eslint-disable react/prop-types */
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './introText.module.scss';

const lines = [
  'Hi I´m Rob,',
  'a frontend developer that likes',
  'creating smart user interfaces & useful interactions',
  'Developing rich web experiences & applications',
  'keeping myself updated on the latest tech',
];

export default function IntroText() {
  return (
    <div className={styles.text}>
      {lines.map((line, index) => {
        return <AnimatedText key={index}>{line}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({ children }) {
  const revealText = useRef(null);

  useLayoutEffect(() => {
    const el = revealText.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 200,
        duration: 2,
        zIndex: '-1',
      },
      {
        opacity: 1,
        y: 0,
        delay: 2,
        duration: 1,
        zIndex: '1',
      }
    );
  }, []);

  return (
    <p
      className={styles.p}
      ref={revealText}
      data-scroll
      data-scroll-speed='0.2'
    >
      {children}
    </p>
  );
}
