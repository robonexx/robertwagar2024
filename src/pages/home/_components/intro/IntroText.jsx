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
        delay: 0.5,
        opacity: 0,
        y: 200,
        duration: 0,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0,
        duration: 1.5,
      },
      0
    );
  }, []);

  return (
    <p className={styles.p} ref={revealText}>
      {children}
    </p>
  );
}
