import spinner from '../../assets/images/spinner.gif';

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: '1rem', margin: 'auto', display: 'block' }}
      alt='Loading'
    />
  );
};

export default Spinner;
