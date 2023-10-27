/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion';
import TeaserButton from './TeaserButton';

import {
  ProductCardWrapper,
  CardTitle,
  CardInfo,
  CardYear,
  AddToCart,
} from './styled';

const ProductCard = ({ title, year, price, id, image, itemPng }) => {
  return (
    <AnimatePresence>
      <ProductCardWrapper key={id}>
        <motion.div>
          <motion.img
            src={image}
            alt={title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
        <motion.img
          src={itemPng}
          alt={title}
          initial={{ opacity: 0, y: 40, x: 30 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, delay: 0.4 }}
        />
        <CardInfo>
          <div>
            <CardYear>{year}</CardYear>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <CardTitle>{title}</CardTitle>
            </motion.div>
          </div>
          <AddToCart>
            <span>{price}$</span>
            <TeaserButton />
          </AddToCart>
        </CardInfo>
      </ProductCardWrapper>
    </AnimatePresence>
  );
};

export default ProductCard;
