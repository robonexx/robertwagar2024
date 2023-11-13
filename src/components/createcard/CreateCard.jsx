import { useState, useEffect } from 'react';
import Input from '../forms/Input';
import TextArea from '../forms/TextArea';
import ProductCard from '../productcard/ProductCard';
import ImageInput from '../forms/ImageInput';

import './createcard.scss';

const CreateCard = () => {
  const [state, setState] = useState({
    name: '',
    brand: '',
    price: '',
    released: '',
    description: '',
    image: '',
  });
  const [myCards, setMyCards] = useState([]);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // handle on change
  const handleOnChange = (e) => {
    const value = e.target.value;
    setState(
      (prev) => ({
        ...prev,
        [e.target.name]: value,
      }),
      () => {
        console.log('onchange', state);
      }
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.name.trim()) {
      setError(true);
    } else {
      setError(false);
      console.log(
        state.name,
        state.description,
        state.brand,
        state.price,
        state.released,
        state.image
      );

      // Create a new Cards object
      const newCards = {
        // Use a better method to generate IDs in a real-world scenario like a uuid generator
        id: Math.floor(Math.random() * 10000),
        name: state.name,
        description: state.description,
        brand: state.brand,
        price: state.price,
        released: state.released,
        image: state.image,
      };

      // Add the new Cards to myCards array
      // Check if there are existing Cardss in local storage
      const storedMyCards = localStorage.getItem('myCards');
      let updatedMyCards;

      if (storedMyCards) {
        const existingCards = JSON.parse(storedMyCards);
        updatedMyCards = [...existingCards, newCards];
      } else {
        updatedMyCards = [newCards];
      }

      // Update local storage
      localStorage.setItem('myCards', JSON.stringify(updatedMyCards));

      setMyCards(updatedMyCards);

      // Clear the form inputs
      setState({
        name: '',
        brand: '',
        price: '',
        released: '',
        description: '',
        image: '',
      });
    }
  };

  // Check if there are existing Cardss in local storage with useEffect hook if no Cardss we push a empty array to state.
  // using a loaded state to update the dom on rerender
  useEffect(() => {
    if (!loaded) {
      const storedmyCards = localStorage.getItem('myCards');
      if (storedmyCards) {
        setMyCards(JSON.parse(storedmyCards));
      } else {
        setMyCards([]);
      }
      // Set loaded to true to avoid infinite loop
      setLoaded(true);
    }
  }, [loaded]);

  return (
    <div
      /* className='container mx-auto px-6 p-10 lg:px-40' */ className='createcard'
    >
      <div>
        <h2 /* className='mt-16 mb-4 py-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-transparent drop-shadow-md font-extrabold body-font font-black text-xl md:text-2xl lg:text-3xl' */
        >
          Create your own Cards
        </h2>
        <form
          onSubmit={handleSubmit}
          /* className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' */
        >
          <Input
            type='text'
            label='Name'
            value={state.name}
            name='name'
            error={error}
            onChange={handleOnChange}
            placeholder='Enter name of Cards'
          />
          <Input
            type='text'
            label='Price'
            value={state.price}
            name='price'
            error={error.price}
            onChange={handleOnChange}
            placeholder='Enter price of Cards'
          />

          <Input
            type='text'
            label='Released'
            value={state.released}
            name='released'
            error={error.released}
            onChange={handleOnChange}
            placeholder='Enter release date of Cards'
          />

          <Input
            type='text'
            label='Brand'
            value={state.brand}
            name='brand'
            error={error.brand} // Assuming you have an error property for each field in your error state
            onChange={handleOnChange}
            placeholder='Enter brand of Cards'
          />
          <TextArea
            label='Description'
            value={state.description}
            name='description'
            error={error}
            onChange={handleOnChange}
            placeholder='Enter description'
          />
          <ImageInput
            label='Upload Image'
            onChange={(base64String) => handleOnChange('image', base64String)}
            error={error}
            disabled={false}
          />
          <button
            type='submit'
            /*  className='bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-8 my-4 w-1/3 md:w-32' */
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        <h2 /* className='mt-16 mb-4 py-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-transparent drop-shadow-md font-extrabold body-font font-black text-xl md:text-2xl lg:text-3xl' */
        >
          Your own Cardss
        </h2>
        {myCards ? (
          myCards.map((props) => <ProductCard {...props} key={props.id} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default CreateCard;
