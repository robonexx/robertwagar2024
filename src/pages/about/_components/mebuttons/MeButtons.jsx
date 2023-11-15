import React from 'react';
import { SiAboutdotme } from 'react-icons/si';
import { IoSchool } from 'react-icons/io5';
import { LuBrainCircuit } from 'react-icons/lu';

// styles
import styles from './mebuttons.module.scss';

const MeButtons = () => {
  return (
    <div className={styles.mebuttons}>
      <button>
        <SiAboutdotme />
      </button>
      <button>
        <LuBrainCircuit />
      </button>
      <button>
        <IoSchool />
      </button>
    </div>
  );
};

export default MeButtons;
