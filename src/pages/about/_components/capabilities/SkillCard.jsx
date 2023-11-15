import React from 'react';
import styles from './capabilities.module.scss';

const SkillCard = ({ name, image, desc, link }) => {
  return (
    <div className={styles.wrapper}>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <div>
          <h3>{name}</h3> <img src={image} alt='html5' />{' '}
        </div>
        <p> {desc}</p>
      </a>
    </div>
  );
};

export default SkillCard;
