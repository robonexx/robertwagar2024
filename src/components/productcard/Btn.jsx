const getVariant = (variant) => {
  switch (variant) {
    case 'primary':
      return styled.button`
        ${baseStyles}
        background-color: #6366f1;
        color: #fff;
        box-shadow: 0 2px 4px rgba(66, 153, 225, 0.25), 0 8px 16px rgba(66, 153, 225, 0.75);
        &:hover {
          box-shadow: 0 2px 8px rgba(66, 153, 225, 0.5), 0 12px 24px rgba(66, 153, 225, 0.9);
        }
      `;
    case 'danger':
      return styled.button`
        ${baseStyles}
        background-color: #ef4444;
        color: #fff;
        box-shadow: 0 2px 4px rgba(239, 68, 68, 0.25), 0 8px 16px rgba(239, 68, 68, 0.75);
        &:hover {
          box-shadow: 0 2px 8px rgba(239, 68, 68, 0.5), 0 12px 24px rgba(239, 68, 68, 0.9);
        }
      `;

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
      variant={getVariant(variant)}
     /*  className={` */
     /*      ${getVariant(variant)}  transition duration-300  ${ */
     /*    !paddingLess && 'p-1' */
     /*  }  ${!square && 'rounded-sm'} active:scale-95 ${className} `} */
    >
      {children}
    </button>
  );
};
