import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../../../../assets/constants/productData';
import Headline from '../../../../components/headline/Headline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// styles
import styles from './projects.module.scss';
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const imageContainer = useRef(null);
  const refEl = useRef(null);

  useEffect(() => {
    const el = refEl.current;
    gsap.fromTo(
      el,
      { opacity: 1, y: 0, delay: 0.5, duration: 0.3 },
      {
        opacity: 1,
        y: -100,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: 'top+=0px',
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <div
      className={styles.projects}
      ref={refEl}
      data-scroll
      data-scroll-speed='0.3'
    >
      <div className={styles.headline}>
        <Headline title='work' />
      </div>
      <div className={styles.projectList}>
        {productData &&
          productData.slice(0, 4).map((project, index) => {
            return (
              <Link
                to={`/work/${project.id}`}
                key={index}
                onMouseOver={() => {
                  setSelectedProject(index);
                }}
                onTouchStart={() => {
                  setSelectedProject(index);
                }}
                className={styles.projectEl}
              >
                <h2>{project.title}</h2>
              </Link>
            );
          })}
        <div ref={imageContainer} className={styles.imageContainer}>
          <img
            src={`${productData[selectedProject].image}`}
            alt='project image'
          />
        </div>
      </div>
      <div className={styles.desc}>
        <h4 className={styles.desc_title}>
          {productData[selectedProject].title}
        </h4>
        <p>{productData[selectedProject].desc}</p>
      </div>
    </div>
  );
}
