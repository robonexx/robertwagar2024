/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import { Background } from '../../components/background/Background';
import styles from './home.module.scss';
import BgEllipse from '../../components/bgellipse/BgEllipse';
import SideScroll from './_components/sidescroll/SideScroll';
import PageTransition from '../../components/animations/PageTransition';
import Hero from './_components/hero/Hero';
import ProductList from '../../components/productlist/ProductList';
import ProductItem from '../../components/productitem/ProductItem';
import { productData } from '../../assets/constants/productData';
import useMediaQuery from '../../hooks/useMediaQuery';
import Grid from '../../components/_ui/gridsystem/Grid';
import GridItem from '../../components/_ui/gridsystem/GridItem';
import LinkBtn from '../../components/_ui/Link/HashLinkBtn';

export const Home = () => {
  return (
    <div className={styles.home}>
      <PageTransition />
      <Hero />
      <div className={styles.sidescroll_wrapper}>
        <SideScroll title='Developing user experiences, interactions & bringing ideas to life' />
      </div>
      <section className={styles.section}>
        <h1>A few projects</h1>
        <BgEllipse />
        <ProductList>
          {productData &&
            productData
              .slice(0, 3)
              .map((p) => <ProductItem {...p} key={p.id} />)}
        </ProductList>
        <Background />
      </section>
      <section className={styles.section}>
        <Grid>
          <GridItem>
            <h2>Github</h2>
            <p>
              I've been playing around with some cool stuff on GitHub thru the
              past years. There is Check out my latest projects. There's a bit
              of everything, so feel free to take a peek and let me know what
              you think! Cheers! 🚀
            </p>
            <LinkBtn
              href='https://github.com/robonexx'
              rel='noopener noreferrer'
              title='Github'
              target='_blank'
            />
          </GridItem>
          <GridItem>
            <h2>Projects / work</h2>
            <p>
              You can also check some more projects right here. Take a peek at
              my cool projects. From tech wonders to creative gems, there's a
              bit of everything.
            </p>
            <LinkBtn href='./work/' title='work' />
          </GridItem>
          <GridItem>
            <h2>Components</h2>
            <p>
              Feel free to explore some of the components I've crafted. For a
              broader collection, you can find more on my GitHub. Here, I've
              highlighted a few that can be beneficial for a variety of
              projects.
            </p>
            <LinkBtn href='./work/#components' title='check components' />
          </GridItem>
        </Grid>
        {/* <Silhuette /> */}
      </section>
    </div>
  );
};
