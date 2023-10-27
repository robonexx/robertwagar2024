import styles from './contact.module.scss'
import Coffee from '../../components/coffee/Coffee';
import Headline from '../../components/headline/Headline';
import BgEllipse from '../../components/bgellipse/BgEllipse';
import PageTransition from '../../components/animations/PageTransition';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <PageTransition />
      <BgEllipse />
      <div className={styles.top_section}>
        <Headline title='Contact' />
      </div>
      <Coffee />
    </div>
  );
};

export default Contact;
