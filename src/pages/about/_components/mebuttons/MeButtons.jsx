import React from 'react';
import { SiAboutdotme } from 'react-icons/si';
import { IoSchool } from 'react-icons/io5';
import { LuBrainCircuit } from 'react-icons/lu';

// styles
import styles from './mebuttons.module.scss';

const MeButtons = ({ setCategory }) => {
  const HandleChoice = (category) => {
    setCategory(category);
  };

  return (
    <div className={styles.mebuttons}>
      <button>
        <SiAboutdotme onClick={() => HandleChoice('me')} />
      </button>
      <button>
        <LuBrainCircuit onClick={() => HandleChoice('capabilities')} />
      </button>
      <button>
        <IoSchool onClick={() => HandleChoice('education')} />
      </button>
    </div>
  );
};

export default MeButtons;
