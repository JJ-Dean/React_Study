import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
  font: inherit;
  border: 1px solid #ff8c69;
  background: #ff8c69;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;

  &:hover,
  &:active {
    background: #ff4500;
    border-color: #ff4500;
  }

  &:focus {
    outline: none;
  }
`;

const Button = (props) => {
  return (
    <StyledButton type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
