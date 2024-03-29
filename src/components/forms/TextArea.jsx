const TextArea = ({
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
      <textarea
        /* className='shadow appearance-none border rounded w-full h-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-current placeholder-[#667085]' */
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      ></textarea>
      {error && (
        <p /* className='text-[#db4437] text-sm font-normal ml-3 mt-1' */>
          This field can't be empty
        </p>
      )}
    </div>
  );
};

export default TextArea;
