/* eslint-disable react/prop-types */
import styled from 'styled-components';

export const CustomIconBtn = styled.button`
  position: relative;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  min-width: 120px;
  max-width: 280px;
  height: 42px;
  border: none;
  border: 1px solid transparent;
  outline: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s linear;
  background-color: ${(props) => props.$bgcolor};
  color: white;
  align-self: center;
  cursor: pointer;

  &:hover {
    background-color: #282828;
    border: 1px solid aqua;
  }

  &:active {
    background-color: #282828;
    color: aqua;
  }

  & > img {
    margin-left: 1rem;
    width: 24px;
    height: 24px;
    pointer-events: none;
  }
`;
