import styles from './textmid.module.scss';

const TextMid = () => {
  return (
    <div className={styles.text_mid}>
      <p className={styles.three} data-scroll data-scroll-speed='0.3'>
        ...
      </p>
      <div className={styles.mid_top} data-scroll data-scroll-speed='0.6'>
        <h2 className={styles.para}>
          If you are looking for a <b className={styles.highlight}>developer</b>{' '}
          to <span className={styles.highlight}>bring</span> your ideas to{' '}
          <span className={styles.highlight}>life</span> <br />
          You have come to the right place my goal is to always
          <span className={styles.highlight}> find</span> the best{' '}
          <span className={styles.highlight}>sollutions</span> for my customers
          problems & needs
        </h2>
      </div>

      <div className={styles.mid} data-scroll data-scroll-speed='0.3'>
        <h2 className={styles.para}>
          I create smart user{' '}
          <span className={styles.highlight}>interfaces</span> & useful{' '}
          <span className={styles.highlight}>interactions</span> <br />
          It is equally important to
          <span className={styles.highlight}> what it does </span>
          as much as how it attracts the eye
        </h2>
      </div>
      <div className={styles.mid_bottom} data-scroll data-scroll-speed='0.6'>
        <div className={styles.bottom_left} data-scroll data-scroll-speed='0.7'>
          <h2 className={styles.para}>
            Elevating
            <span className={styles.highlight}> User Interactions</span> for
            Seamless
            <span className={styles.highlight}> Experiences</span> in Code
          </h2>
        </div>
        <div
          className={styles.bottom_right}
          data-scroll
          data-scroll-speed='0.3'
        >
          <h2 className={styles.para}>
            As a developer I&apos;m transforming
            <span className={styles.highlight}> Vision </span> <br /> into
            <span className={styles.highlight}> Interactive Reality</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TextMid;
