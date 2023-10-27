import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import { slide, scale } from '../animations/MenuAnimations';
// styles
import styles from './navItem.module.scss';

// eslint-disable-next-line react/prop-types
const NavItem = ({ title, path, id, i, active, setActive }) => {
  return (
    <m.li
      className={` ${styles.nav_item}`}
      key={id}
      /* initial={{ opacity: 0, y: i % 2 === 0 ? -100 : 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: i * 0.2 }} */
      custom={i}
      variants={slide}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <Link
        className={styles.nav_link}
        onClick={() => setActive(false)}
        to={path}
        variants={scale}
        animate={active ? 'open' : 'closed'}
      >
        {title}
      </Link>
    </m.li>
  );
};

export default NavItem;
