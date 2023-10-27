import styles from './griditem.module.scss';

// eslint-disable-next-line react/prop-types, no-unused-vars
const GridItem = ({ children }) => {
  return (
    <div className={styles.item}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default GridItem;
