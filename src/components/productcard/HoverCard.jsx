import React from 'react';
import './hovercard.css';

const HoverCard = () => {
  return (
    <div className='card'>
      <img
        src='https://raw.githubusercontent.com/mohammadjarabah/codepen-assets/main/pens/mdwvNJP/images/shoes.png'
        className='card__img'
      />
      <h2 className='card__title'>Nike Shoes</h2>
      <div className='card__content'>
        <div className='card__sizeContainer'>
          <p className='card__sizeTitle'>Size:</p>
          <span className='card__sizeNumber'>7</span>
          <span className='card__sizeNumber'>8</span>
          <span className='card__sizeNumber'>9</span>
          <span className='card__sizeNumber'>10</span>
        </div>
        <div className='card__colorContainer'>
          <p className='card__colorTitle'>Color:</p>
          <span
            className='card__colorCircle'
            style='background-color: #9bdc28;'
          ></span>
          <span
            className='card__colorCircle'
            style='background-color: #03a9f4;'
          ></span>
          <span
            className='card__colorCircle'
            style='background-color: #e91e63;'
          ></span>
        </div>
      </div>
      <a href='#' className='card__link'>
        Buy Now
      </a>
    </div>
  );
};

export default HoverCard;
