// styles
import styles from './sideScroll.module.scss';

// eslint-disable-next-line react/prop-types
const SideScroll = ({ title }) => {
  return (
    <h2 className={styles.sidescroll} data-scroll data-scroll-speed='0.3'>
      <span className={`${styles.p} ${styles.first}`}>{title}</span>
    </h2>
  );
};

export default SideScroll;
