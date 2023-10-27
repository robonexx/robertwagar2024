import styled from 'styled-components';

export const ProductContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 4rem 0;
  background-color: transparent;

  @media (min-width: 768px) {
    margin-top: 10rem;
    width: 53.125rem;
    border-radius: 1.125rem;
  }
`;

export const ProductCardWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 3.125rem;

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 90%;
    height: 100%;
    border-radius: 1.125rem;
  }

  & > div {
    & > img {
      border-radius: 3.125rem;

      @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        border-radius: 1.125rem;
      }
    }
  }

  & > img {
    position: absolute;
    bottom: 2px;
    right: 2.5rem;

    @media (max-width: 768px) {
      width: 45%;
      height: auto;
      right: 2rem;
      border-radius: 1.125rem;
    }
  }
`;

export const CardInfo = styled.div`
  margin: 1rem 0 3.5rem 4rem;
  padding: 1rem;
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  & > div {
    width: unset;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0 1.5rem 1.5rem;
    padding: 0.75rem;
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
  font-size: clamp(1.25rem, 2vw, 2.5rem);
  font-weight: 600;
  text-align: left;
  line-height: 1.25;
  color: #fafafa;

  @media (max-width: 768px) {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const AddToCart = styled.div`
  padding: 0 0.5rem;
  min-width: 15rem;
  height: 3.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(120deg, #071b24 5%, #0d2028 10%, #575757d4);
  border: none;
  outline: none;
  border-radius: 42px;

  & > span {
    margin-left: 2rem;
    font-size: 1rem;
    font-weight: 400;
    color: #fafafa;

    @media (max-width: 768px) {
      margin-left: 1rem;
      margin-right: 0.75rem;
    }
  }
`;
