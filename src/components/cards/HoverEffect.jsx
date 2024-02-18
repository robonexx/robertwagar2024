import { useEffect, useRef } from 'react';
import hoverEffect from 'hover-effect';
import { motion } from 'framer-motion';
import overlay from '../../assets/images/distortion.png';
import distort2 from '../../assets/images/hoverDistort.png';

import styles from './cards.module.scss';


const HoverEffect = ({ img1, img2, title, subtitle, desc }) => {

   const myRef = useRef();

  useEffect(() => {
    new hoverEffect({
      parent: myRef.current,
      intensity: 0.3,
      image1: img1,
      image2: img2,
      displacementImage: distort2,
    });
  }, [img1, img2]);

  return (
    <div>
      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, type: 'spring' }}
        transition={{ duration: 0.6, delay: 2, ease: 'easeInOut' }}
      >
        <div className={styles.item}>
          <div className={styles['item-header']}>
            <div className={styles['item-header-heading']}>{title}</div>
            <div className={styles['item-header-heading2']}>{subtitle}</div>
          </div>
          <div className={styles['item-image']} ref={myRef}></div>
          <div className={styles['item-footer']}>
            <div className={styles['item-footer-quote']}>{desc}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HoverEffect;
