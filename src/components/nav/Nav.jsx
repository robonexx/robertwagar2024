import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navSlide } from '../animations/MenuAnimations';

// styles
import styles from './nav.module.scss';

// eslint-disable-next-line react/prop-types
const Nav = ({ active, children }) => {
  return (
    <motion.nav
      className={styles.nav}
      variants={navSlide}
      initial='initial'
      animate='enter'
      exit='exit'
    ><Link
    className={styles.link}
    to='/'
  >
    Robert Wägar
  </Link>
      <ul className={`${styles.menu} ${active ? styles.open : ''}`}>
        
        {children}
      </ul>
    </motion.nav>
  );
};

export default Nav;
