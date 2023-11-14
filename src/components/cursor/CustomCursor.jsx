import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../../context/CustomCursorContext';
import styles from './cursor.module.scss';

const sizes = { l: 300, m: 100, s: 50 };

const CustomCursor = () => {
  const { cursorState, dispatchCursor } = useCursor();

  useEffect(() => {
    const onMouseMove = (e) => {
      dispatchCursor({
        type: 'setPosition',
        position: { x: e.clientX, y: e.clientY },
      });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [dispatchCursor]);

  const variants = {
    cursorDefault: { width: sizes.s, height: sizes.s },
    cursorResizeL: {
      width: sizes.l,
      height: sizes.l,
      x: cursorState.position.x - sizes.l / 2,
      y: cursorState.position.y - sizes.l / 2,
    },
    cursorResizeM: {
      width: sizes.m,
      height: sizes.m,
      x: cursorState.position.x - sizes.m / 2,
      y: cursorState.position.y - sizes.m / 2,
    },
  };

  return (
    <motion.div
      className={styles.cursor}
      variants={variants}
      animate={cursorState.variant}
      style={{
        x: cursorState.position.x - sizes.s / 2,
        y: cursorState.position.y - sizes.s / 2,
      }}
    ></motion.div>
  );
};

export default CustomCursor;
