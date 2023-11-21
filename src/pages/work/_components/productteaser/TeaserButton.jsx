import styled from 'styled-components';
import ShopIcon from '../../../../assets/icons/akar-icons_cart.svg';

export const Btn = styled.button`
  position: relative;
  width: 6rem;
  height: 2.25rem;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  pointer-events: none;
  transition: all 0.4s linear;

  @media (min-width: 768px) {
    width: 8.25rem;
    height: 3.25rem;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0;
    border-radius: 25px;
    background-image: radial-gradient(circle, #3dbda7, #3dbda7);
    pointer-events: fill;
  }

  &:hover:before {
    cursor: pointer;
    background-image: radial-gradient(circle, #3dbda7, #067d71);
  }

  & > img {
    margin-right: 0.5rem;
    width: 24px;
    height: 24px;
    pointer-events: none;

    @media (max-width: 768px) {
      width: 18px;
      height: 18px;
    }
  }

  & > h4 {
    font-size: 0.75rem;
    font-weight: 700;
    pointer-events: none;

    @media (max-width: 768px) {
      margin: 0;
      padding: 0;
      font-size: 0.5rem;
    }
  }
`;

const TeaserButton = () => {
  return (
    <Btn>
      <img src={ShopIcon} alt='shopping card svg' />
      <h4>Add to cart</h4>
    </Btn>
  );
};

export default TeaserButton;
