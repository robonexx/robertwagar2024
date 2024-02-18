import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';
import PNGIMG from '../../assets/images/productimages/model.png';

const cardSize = {
  mobile: {
    width: '16rem',
    height: '32rem',
  },
};

const CardContainer = styled.div`
  position: relative;
  background: #fff;
  padding: 0.5rem;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 20px auto;
  transition: all 0.3 ease-in-out;

  @media (max-width: 991px) {
    width: 80%;
    height: fit-content;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  height: 18rem;
  border-radius: 5px;
  transition-delay: 1s;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &::before {
    content: 'VIBE';
    position: absolute;
    color: #88888880;
    font-size: 6rem;
    font-weight: 800;
    top: -2rem;
    left: 20%;
    width: 20rem;
    height: 20rem;
    display: flex;
    align-items: flex-end;
    opacity: 0;
    z-index: -1;
  }

  &:hover {
    overflow: visible;
    &::before {
      transition: all 0.4s ease-in-out;
      z-index: 1;
      opacity: 1;
      filter: blur(3px);
    }
  }

  &:not(:hover) {
    transition-delay: 0.5s;
  }
`;

const BgImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  background-image: linear-gradient(
    135deg,
    rgb(102, 126, 234) 0%,
    rgb(118, 75, 162) 100%
  );

  ${ImageContainer}:hover & {
    height: 0;
    transition: all 0.3s ease-in-out 0.3s;
  }
`;

const ImagePng = styled(motion.img)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  border-radius: 6px;
  object-fit: cover;

  ${ImageContainer}:hover & {
    top: -100px;
    filter: drop-shadow(0 0.5rem 0.7rem rgba(0, 0, 0, 0.2));
  }
`;

const TextContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 5px;
  position: relative;
  transition: all 0.2s ease-in-out;

  > span {
    padding: 0.75rem 1.75rem;
    border: 1px solid #313131;
    background: #212121;
    color: #fff;
    border-radius: 27px;
    transition: all 0.05s ease-in-out;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
`;

const Description = styled.p`
  height: 62px;
  overflow: hidden;
  font-size: 0.8rem;
  line-height: 1;
`;

const Footer = styled.div`
  padding: 25px 0 5px;
  border-top: 1px solid #ddd;

  &:after,
  &:before {
    content: '';
    display: table;
  }

  &:after {
    clear: both;
  }
`;

const Left = styled.div`
  float: left;
`;

const Right = styled.div`
  float: right;
`;

const Price = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const BuyButton = styled.a`
  display: block;
  color: #212121;
  text-align: center;
  font-size: 1rem;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 50%;
  border: 1px solid #212121;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    border-color: #a26fb9;
    background: #c994e2;
    color: #fff;
    text-decoration: none;
  }
`;

const CardExclusive = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: '500px 0px -50px 0px',
  });
  return (
    <CardContainer ref={ref}>
      <ImageContainer className='image'>
        <BgImage className='img' />
        <ImagePng
          src={PNGIMG}
          alt='Product'
          className='png'
          style={{ top: inView ? '-100px' : '0' }}
        />
      </ImageContainer>
      <TextContainer className='text'>
        <Category>
          <span>VIBE</span>
        </Category>
        <Title>Let's Vibe tonight</Title>
        <Description>
          Get into the groove, where the beats meet your feet, and the party
          vibe comes alive.
        </Description>
        <Footer className='card-footer'>
          <Left className='wcf-left'>
            <Price>199$</Price>
          </Left>
          <Right className='wcf-right'>
            <BuyButton href='#'>
              <i className='zmdi zmdi-shopping-basket'></i>
            </BuyButton>
          </Right>
        </Footer>
      </TextContainer>
    </CardContainer>
  );
};

export default CardExclusive;
