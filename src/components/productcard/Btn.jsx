const getVariant = (variant) => {
  switch (variant) {
    case 'primary':
      return 'bg-indigo-500 hover:bg-indigo-700  text-white shadow shadow-blue-600/25 hover:shadow-blue-600/75';
    case 'danger':
      return 'bg-red-500 hover:bg-red-700 text-white  shadow shadow-red-600/25 hover:shadow-red-600/75';
    case 'success':
      return 'bg-green-500 hover:bg-green-700 text-white shadow shadow-green-600/25 hover:shadow-green-600/75 ';
    case 'warning':
      return 'bg-amber-500 hover:bg-amber-700 text-white shadow shadow-yellow-600/25 hover:shadow-yellow-600/75 ';
    case 'outline-danger':
      return 'bg-white text-red-500 border border-red-500 hover:text-white hover:bg-red-700  ';
    case 'outline-danger':
      return 'bg-white text-red-500 border border-red-500 hover:text-white hover:bg-red-700  ';
    case 'outline-success':
      return 'bg-white text-green-500 border border-green-500 hover:text-white hover:bg-green-700  ';
    case 'outline-warning':
      return 'bg-white text-amber-400 border border-amber-500 hover:text-white hover:bg-amber-500  ';
    case 'outline-primary':
      return 'bg-white text-indigo-500 border border-violet-500 hover:text-white hover:bg-indigo-700  ';

    default:
      return 'bg-indigo-500 hover:bg-indigo-700 text-white shadow shadow-indigo-600/25 hover:shadow-indigo-600/75';
  }
};

export const Btn = ({
  className,
  children,
  variant,
  square,
  paddingLess,
  type = 'button',
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      varint={variant}
     /*  className={` */
     /*      ${getVariant(variant)}  transition duration-300  ${ */
     /*    !paddingLess && 'p-1' */
     /*  }  ${!square && 'rounded-sm'} active:scale-95 ${className} `} */
    >
      {children}
    </button>
  );
};
