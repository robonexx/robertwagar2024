import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { productData } from '../../assets/constants/productData';
import { AiFillCaretRight, AiFillHome } from 'react-icons/ai';

import styles from './item.module.scss';
import TextToSpeech from '../../components/texttospeech/textToSpeech';

const easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delay: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  initial: {
    x: -60,
    opacity: 0,
    transition: { delay: 0.4, duration: 0.3, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Item = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  const handleRead = () => {
    setShowDescription(false);
  };

  const handleListen = () => {
    setShowDescription(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const foundItem = productData.find((item) => Number(id) === item.id);

        if (foundItem) {
          setItem(foundItem);
        } else {
          console.error('Item not found');
        }
      } catch (error) {
        console.error('Error fetching item data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  const { title, year, tag, desc, tech, image } = item;

  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
      <div className={styles.wrapper}>
        <div className={styles.header_buttons}>
          <Link to='/work' className={styles.go_back}>
            All Work
          </Link>
          <Link to='/' className={styles.home_link}>
            <AiFillHome />
          </Link>
        </div>
        <motion.div variants={fadeInUp} className={styles.title_wrapper}>
          <span className={styles.top_title}>Project: {title}</span>
          <motion.h1
            className={styles.title}
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {title}
          </motion.h1>
        </motion.div>
        <div className={styles.card}>
          <motion.div
            className={styles.img}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <motion.img
              key={id}
              src={image ? image : ''}
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
          </motion.div>
          <div className={styles.details}>
            <motion.div variants={stagger} className={styles.inner}>
              <motion.div variants={fadeInUp}>
                <p className={styles.year}>{year}</p>
                <p className={styles.tag}>{tag}</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <p>Description:</p>
                {window.innerWidth > 768 ? (
                  <div>
                    <button
                      className={
                        showDescription
                          ? styles.btn
                          : `${styles.btn} ${styles.active}`
                      }
                      onClick={handleRead}
                    >
                      Read
                    </button>
                    <button
                      className={
                        !showDescription
                          ? styles.btn
                          : `${styles.btn} ${styles.active}`
                      }
                      onClick={handleListen}
                    >
                      Listen
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
                {!showDescription ? (
                  <p className={styles.desc}>{desc}</p>
                ) : (
                  <TextToSpeech text={desc} />
                )}
              </motion.div>
              <motion.div variants={fadeInUp}>
                <p>TECH:</p>
                <p className={styles.tech}>{tech}</p>
              </motion.div>
            </motion.div>
          </div>
          <Link
            to={`/work/${
              parseInt(id) <= productData.length - 1 ? parseInt(id) + 1 : 1
            }`}
            className={styles.next_btn}
          >
            <motion.span
              initial={{ x: -500, y: 0 }}
              animate={{ x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              NEXT PROJECT <AiFillCaretRight />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Item;
