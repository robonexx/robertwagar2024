import { useState, useEffect } from 'react';
import { Background } from '../../components/background/Background';
import styles from './home.module.scss';
import BgEllipse from '../../components/bgellipse/BgEllipse';
import SideScroll from './_components/sidescroll/SideScroll';
import PageTransition from '../../components/animations/PageTransition';
import Hero from './_components/hero/Hero';
import ProductList from '../../components/productlist/ProductList';
import ProductItem from '../../components/productitem/ProductItem';
import { productData } from '../../assets/constants/productData';
import Grid from '../../components/_ui/gridsystem/Grid';
import GridItem from '../../components/_ui/gridsystem/GridItem';
import LinkBtn from '../../components/_ui/Link/HashLinkBtn';
import { useCursor } from '../../context/CustomCursorContext'; 

export const Home = () => {
  const { cursorState, dispatchCursor } = useCursor();

  useEffect(() => {
    console.log('Cursor State:', cursorState);
  }, [cursorState]);

  const handleMouseEnter = () => {
    console.log('Mouse Enter');
    dispatchCursor({
      type: 'setVariant',
      variant: 'cursorResizeL',
    });
  };

  const handleMouseLeave = () => {
    console.log('Mouse Leave');
    dispatchCursor({
      type: 'setVariant',
      variant: 'cursorDefault',
    });
  };

  

  return (
    <div className={styles.home}>
      <PageTransition />
      <Hero />
      <div className={styles.sidescroll_wrapper}>
        <SideScroll title='Developing user experiences, interactions & bringing ideas to life' />
      </div>
      <section className={styles.section}>
        <h1
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >A few projects</h1>
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


/*  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('cursorDefault');

    useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
  };

  const onMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  const cursorLarge = () => setCursorVariant('cursorResizeL');
  const cursorMedium = () => setCursorVariant('cursorResizeM');
  const cursorReset = () => setCursorVariant('cursorReset');
  const cursorArticle = () => setCursorVariant('cursorArticle');

  const variants = {
    cursorReset: {
      x: position.x,
      y: position.y,
    },
    cursorResizeL: {
      height: 300,
      width: 300,
      x: position.x - 150,
      y: position.y - 150,
    },
    cursorResizeM: {
      height: 100,
      width: 100,
      x: position.x - 50,
      y: position.y - 50,
    },
    cursorArticle: {
      height: 50,
      width: 50,
      x: position.x - 25,
      y: position.y - 25,
    },
  }; */
