import React from 'react';
import styles from './logo.module.scss';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import LOGO from '../../assets/images/robIcon.png';

const Logo = () => {
  return (
      <motion.div className={styles.logo}
      initial={{opacity:0, scale:0}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{duration: 0.8, delay: 5}}
      >
      <Link to='/'>
        <img src={LOGO} alt='' />
      </Link>
    </motion.div>
  );
};

export default Logo;
