/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import About from './pages/about/About';
import Sidebar from './components/sidebar/Sidebar';
import MenuBtn from './components/menuBtn/MenuBtn';
import { AnimatePresence } from 'framer-motion';
import Nav from './components/nav/Nav';
import NavItem from './components/nav/NavItem';
import { navData } from './assets/constants/NavData';
import { Work } from './pages/work/Work';
import { Background2 } from './components/background/Background2';
import Item from './pages/item/Item';
import Contact from './pages/contact/Contact';
import Playground from './pages/playground/Playground';
import ScrollToTop from './utils/ScrollToTop';

// styles
import styles from './app.module.scss';
import Logo from './components/logo/Logo';
import LoadingPage from './pages/LoadingPage';

function App() {
  const [active, setActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // ✅ Start as false

  useEffect(() => {
    const hasVisited = localStorage.getItem('visited');

    if (!hasVisited) {
      setIsLoading(true); // ✅ Only show loading for first-time visitors
      localStorage.setItem('visited', 'true');

      setTimeout(() => {
        setIsLoading(false);
      }, 5000); // Adjust duration
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ✅ Correct placement of loading screen
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <main className={styles.main}>
      <Logo />
      <Background2 />
      <MenuBtn active={active} setActive={setActive} />
      <AnimatePresence mode='wait'>
        {active && (
          <Nav active={active} setActive={setActive}>
            {navData.map(({ title, path, cls, id }, i) => (
              <NavItem
                title={title}
                path={path}
                cls={cls}
                key={id}
                i={i}
                active={active}
                setActive={setActive}
              />
            ))}
          </Nav>
        )}
      </AnimatePresence>
      <Sidebar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/work/:id' element={<Item />} />
        <Route path='/playground' element={<Playground />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <div className='scrolling'>
        {scrollY > 500
          ? 'Scrolled more than 500px'
          : 'Still somewhere near the top!'}
      </div>
      <div className={'overlay'}></div>
    </main>
  );
}

export default App;
