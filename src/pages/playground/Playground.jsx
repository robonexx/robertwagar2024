import PageTransition from '../../components/animations/PageTransition';
import BgEllipse from '../../components/bgellipse/BgEllipse';
import GithubConnect from '../../components/githubconnect/GithubConnect';
import Headline from '../../components/headline/Headline';
import { Silhuette } from '../../components/silhuette/Silhuette';
import styles from './playground.module.scss';

const Playground = () => {
  return (
    <div className={styles.interactive}>
      <PageTransition />
      <div className={styles.top_section}>
        <Headline title='Interactive Playground' />
      </div>
      <Silhuette />
      <BgEllipse />
      <section>
        <GithubConnect />
      </section>
    </div>
  );
};

export default Playground;
