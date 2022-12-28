import React from 'react';

import Card from './Card';
import Button from './Button';
import styled from 'styled-components';
import Wrapper from '../Helpers/Wrapper';

const StyledErrorModal = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  & .header {
    background: #4f005f;
    padding: 1rem;
  }

  & .header h2 {
    margin: 0;
    color: white;
  }

  & .content {
    padding: 1rem;
  }

  & .actions {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    & {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const ErrorModal = (props) => {
  return (
    <Wrapper>
      <Backdrop onClick={props.onConfirm} />
      <StyledErrorModal>
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onConfirm}>닫기</Button>
        </footer>
      </StyledErrorModal>
    </Wrapper>
  );
};

export default ErrorModal;
