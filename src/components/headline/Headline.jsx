import styles from './headline.module.scss';

// eslint-disable-next-line react/prop-types
const Headline = ({ title }) => {
  return <h1 className={styles.headline}>{title}</h1>;
};

export default Headline;
