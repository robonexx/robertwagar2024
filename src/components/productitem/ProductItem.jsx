import styles from './productItem.module.scss';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types, no-unused-vars
const ProductItem = ({ title, year, tag, image, id }) => {
  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.year}>{year}</p>
        <p className={styles.tag}>{tag}</p>
        <div className={styles.image}>
          <img className={styles.img} src={`${image}`} alt={title} />
        </div>
      </div>
      <Link to={`/work/${id}`} />
      <p className={styles.read_more}>read more</p>
    </div>
  );
};

export default ProductItem;
