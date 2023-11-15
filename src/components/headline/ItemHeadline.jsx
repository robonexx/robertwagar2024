import styles from './itemHeadline.module.scss';

// eslint-disable-next-line react/prop-types
const ItemHeadline = ({ title }) => {
  return (
    <div>
      <h1 className={styles.item_headline}>{title}</h1>
    </div>
  );
};

export default ItemHeadline;
