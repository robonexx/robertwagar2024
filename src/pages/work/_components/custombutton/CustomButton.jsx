/* eslint-disable react/prop-types */
import { CustomIconBtn } from './styled';

const CustomButton = ({ title, bgColor, icon }) => (
  <CustomIconBtn $bgcolor={bgColor}>
    {title}
    <img src={icon} alt='icon svg' />
  </CustomIconBtn>
);

export default CustomButton;