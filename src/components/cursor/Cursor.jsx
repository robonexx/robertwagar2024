import React from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import { motion } from 'framer-motion';
import styles from './cursor.module.scss';

const Cursor = ({ cursorVariant, variants }) => {
  return (
    <motion.div
      className={styles.cursor}
      variants={variants}
      animate={cursorVariant}
    ></motion.div>
  );
};

export default Cursor;
