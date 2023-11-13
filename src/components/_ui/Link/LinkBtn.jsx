import { Link } from 'react-router-dom';
import styles from './link.module.scss'

const LinkBtn = ({ href, title }) => {
  return (
    <Link to={href} target='_blank' rel='noopener noreferrer' className={styles.link}>
      {title}
    </Link>
  );
};

export default LinkBtn;
