import styles from './grid.module.scss';

// eslint-disable-next-line react/prop-types
const Grid = ({ children }) => {
  return (
    <div className={`${styles.grid} ${styles.grid_3_col}`}>{children}</div>
  );
};

export default Grid;
