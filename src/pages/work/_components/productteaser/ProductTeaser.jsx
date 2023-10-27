import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProductContainer } from './styled';
import ProductCard from './ProductCard';
import { products } from '../../../../assets/constants/data';

const ProductTeaser = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);

    return () => clearInterval(sliderInterval);
  }, []);

  return (
    <ProductContainer>
      <AnimatePresence>
        {products.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: idx === currentIndex ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {idx === currentIndex && <ProductCard {...p} />}
          </motion.div>
        ))}
      </AnimatePresence>
    </ProductContainer>
  );
};

export default ProductTeaser;
