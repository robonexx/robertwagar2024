import styles from './work.module.scss';
import { Background2 } from '../../components/background/Background2';
import ProductList from '../../components/productlist/ProductList';
import { productData } from '../../assets/constants/productData';
import ProductItem from '../../components/productitem/ProductItem';
import Headline from '../../components/headline/Headline';
import BgEllipse from '../../components/bgellipse/BgEllipse';
import ProductTeaser from './_components/productteaser/ProductTeaser';
import PageTransition from '../../components/animations/PageTransition';

// components
import Icon from '../../assets/icons/akar-icons_shopping-bag.svg';
import Icon2 from '../../assets/icons/akar-icons_chat-add.svg';
import Icon3 from '../../assets/icons/akar-icons_cart.svg';
import CustomButton from './_components/custombutton/CustomButton';
import CardExclusive from '../../components/cards/CardExclusive';

//styling

export const Work = () => {
  
  return (
    <div className={styles.work}>
      <PageTransition />
      <Background2 />
      <div className={styles.top_section}>
        <Headline title={'Projects'} />
        <BgEllipse />
      </div>
      <section>
        <ProductList>
          {productData &&
            productData.map((p) => <ProductItem {...p} key={p.id} />)}
        </ProductList>
      </section>
      <section className={styles.components} id='components'>
        <Headline title={'Components'} />
        <h3>Product Teaser</h3>
        <p>This component is created in React using styled components</p>
        <div className={styles.teaser}>
          <ProductTeaser />
        </div>
        <h3>Custom buttons with and icon</h3>
        <p>This component is created in React using styled components</p>
        <div className={styles.buttons}>
          <CustomButton title='Shop Now' icon={Icon} bgColor='#2a7569' />
          <CustomButton title='New Message' icon={Icon2} bgColor='#cc4f29' />
          <CustomButton title='Add to cart' icon={Icon3} bgColor='#121212' />
        </div>
        <div className={styles.space}></div>
        <h3>A Nice card</h3>
        <p>This component is created in React using styled components</p>
        <div className={styles.space}></div>
        <CardExclusive />
      </section>
    </div>
  );
};
