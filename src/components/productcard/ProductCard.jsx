import React from 'react';
import AddToCartBtn from './AddToCartBtn';

const ProductCard = (props) => {
  console.log('props from product card', props);
  return (
    <div /* className='group relative cursor-pointer shadow px-2 py-4 rounded-sm hover:shadow-lg lg:max-h-80 lg:w-60' */
    >
      {/* Changed bg to white, so the image fits and set it to contain.  */}
      <div /* className='aspect-w-1 w-full overflow-hidden rounded-sm bg-white lg:aspect-none group-hover:opacity-75' */
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={'data:image/png;base64,' + props.image} alt={props.name} />
      </div>
      <div /* className='mt-4 flex justify-between' */>
        <div>
          <h5 /* className='text-xs text-gray-800 px-2' */>{props.name}</h5>
        </div>
        <p /* className='text-xs font-medium text-gray-500 px-2 border border-gray-800 rounded-sm hover:text-black' */
        >
          {props.price} kr
        </p>
      </div>
      <div /* className='flex justify-between mt-2' */>
        <AddToCartBtn />
      </div>
    </div>
  );
};

export default ProductCard;
