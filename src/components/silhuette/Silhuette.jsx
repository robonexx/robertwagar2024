import styles from './silhuette.module.scss';

// eslint-disable-next-line react/prop-types
export const Silhuette = ({title}) => {
  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
    </div>
  );
};
