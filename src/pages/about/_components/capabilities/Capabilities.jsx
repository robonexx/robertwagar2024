import ItemHeadline from '../../../../components/headline/ItemHeadline';
import styles from './aboutme.module.scss';

const Capabilities = () => {
  return (
    <div className={styles.capabilities}>
      <div>
        <ItemHeadline title='My capabilities ' />{' '}
      </div>
      <p>
        Greetings! I&apos;m Robert Wägar, a creative frontend developer based in
        Stockholm. With a natural curiosity, I continuously seek new
        opportunities for learning and personal development. When I dive into
        new projects, I like to keep things organized, letting creativity flow
        naturally.
        <br />
        <br />
        Beyond coding, I find immense pleasure in spending time with my family
        and friends. Additionally, I have a fondness for dancing and listening
        to some good music, the joy of life.
      </p>
    </div>
  );
};

export default Capabilities;
