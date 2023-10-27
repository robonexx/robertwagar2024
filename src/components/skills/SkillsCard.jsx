import styles from './skills.module.scss';

// eslint-disable-next-line react/prop-types
const SkillCard = ({ imageFront, imageBack }) => {
  return (
      <div className={styles.card}>
        <div className={styles.card_inner}>
          <div className={styles.card_front}>
            <img src={imageFront} alt='gta style rob' />
          </div>
          <div className={styles.card_back}>
            <img src={imageBack} alt='skills image' />
          </div>
        </div>
      </div>
  );
};

export default SkillCard;
