/* eslint-disable react/prop-types */
import styles from './profileimage.module.scss';

const ProfileImage = ({ avatar_url, login }) => {
  return (
    <div className={styles.content}>
      <div className={styles.user}>
        <p>Github account owner:</p>
        {avatar_url && (
          <img
            className={styles.user_circle}
            src={avatar_url}
          />
        )}
        <h2 className={styles.user_name}>{login}</h2>
      </div>
    </div>
  );
};

export default ProfileImage;
