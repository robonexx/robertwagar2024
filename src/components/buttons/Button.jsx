import styles from './button.module.scss';

// eslint-disable-next-line react/prop-types
export const Button = ({title}) => {
  return (
    <button className={styles.btn} onClick={() => console.log('clicked')}>
     {title}
    </button>
  );
};
