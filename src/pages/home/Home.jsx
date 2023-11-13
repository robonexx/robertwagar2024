/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import { Background } from '../../components/background/Background';
import { Link } from 'react-router-dom';
import { Silhuette } from '../../components/silhuette/Silhuette';
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
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const containerRef = useRef(null);

  useEffect(() => {
    if (isDesktop) {
      (async () => {
        const elRef = containerRef.current;
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
         new LocomotiveScroll({
          el: elRef,
          smooth: true,
          smoothMobile: true,
        });
      })();
    } else {
      return;
    }
  }, [isDesktop]);
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur repudiandae nemo doloremque totam velit quibusdam. A ea
              velit dolorum, omnis, porro aliquam dolores minima exercitationem
              ab nostrum at quisquam perspiciatis!
            </p>
            <LinkBtn
              href='https://github.com/robonexx'
              rel='noopener noreferrer'
              title='Github'
              target='_blank'
            />
          </GridItem>
          <GridItem>
            <h2>Components</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur repudiandae nemo doloremque totam velit quibusdam. A ea
              velit dolorum, omnis, porro aliquam dolores minima exercitationem
              ab nostrum at quisquam perspiciatis!
            </p>
            <LinkBtn href='./work/#components' title='check components' />
          </GridItem>
          <GridItem>
            <h2>Projects / work</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur repudiandae nemo doloremque totam velit quibusdam. A ea
              velit dolorum, omnis, porro aliquam dolores minima exercitationem
              ab nostrum at quisquam perspiciatis!
            </p>
            <LinkBtn href='./work/' title='work' />
          </GridItem>
        </Grid>
        {/* <Silhuette /> */}
      </section>
    </div>
  );
};
