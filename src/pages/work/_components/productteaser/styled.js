import styled from 'styled-components';

export const ProductContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 4rem 0;
  background-color: transparent;

  @media (min-width: 768px) {
    margin-top: 10rem;
    width: 53.125rem;
    height: 20rem;
    border-radius: 1.125rem;
  }
`;

export const ProductCardWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1.125rem;

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 90%;
    height: 100%;
    border-radius: 3.125rem;
  }

  & > div {
    & > img {
      border-radius: 1.125rem;
      width: 100%;
      height: 10rem;

      @media (min-width: 768px) {
        border-radius: 3.125rem;
        height: 100%;
      }
    }
  }

  & > img {
    position: absolute;
    bottom: 5px;
    right: -2rem;
    width: 50%;

    @media (min-width: 768px) {
      bottom: 6px;
      right: 2rem;
      border-radius: 1.125rem;
    }
  }
`;

export const CardInfo = styled.div`
  padding: 1rem 0.5rem;
  position: absolute;
  top: 0;
  left: 1vw;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  & > div {
    width: unset;
  }

  @media (min-width: 768px) {
    margin: 1rem 0 3.5rem 4rem;
    padding: 1rem;
    width: 50%;
    height: 100%;
  }
`;
export const CardYear = styled.div`
  padding: 0.5rem 0.5rem;
  width: fit-content;
  position: relative;
  font-size: 0.7rem;
  font-weight: 700;
  background: linear-gradient(to top left, #067d714d, #3dbda7);
  border-radius: 6px;
`;
export const CardTitle = styled.div`
  height: 3rem;
  margin: 0.5rem 0 1rem;
  font-size: clamp(1rem, 2vw, 2.5rem);
  font-weight: 600;
  text-align: left;
  line-height: 1.25;
  color: #fafafa;

  @media (min-width: 768px) {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const AddToCart = styled.div`
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
  min-width: 10rem;
  height: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(120deg, #071b24 5%, #0d2028 10%);
  border: none;
  outline: none;
  border-radius: 25px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    padding: 0 0.25rem;
    min-width: 15rem;
    height: 3.5rem;
  }

  & span {
    padding-left: 0.25;
    font-size: 0.8rem;
    font-weight: 400;
    color: #fafafa;

    @media (min-width: 768px) {
      margin-left: 2rem;
      margin-right: 0.75rem;
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;
