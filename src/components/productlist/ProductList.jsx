import styles from './productList.module.scss';

// eslint-disable-next-line react/prop-types
const ProductList = ({ children }) => {
  return (
    <div className={`${styles.grid} ${styles.grid_3_col}`}>{children}</div>
  );
};

export default ProductList
