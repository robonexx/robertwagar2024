const Input = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  return (
    <div className='mt-5'>
      <label
        htmlFor={label}
       /*  className='text-lg font-semibold block text-gray-700 font-bold mb-2 ' */
      >
        {label}
      </label>
      <input
        /* className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-current placeholder-[#667085]' */
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      ></input>
      {error && (
        <p/*  className='text-[#db4437] text-sm font-normal ml-3 mt-1' */>
          This field can&apos;t be empty
        </p>
      )}
    </div>
  );
};

export default Input;
