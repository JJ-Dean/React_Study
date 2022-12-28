import React from 'react';
import ReactDom from 'react-dom';

import Card from './Card';
import Button from './Button';
import styled from 'styled-components';

const StyledErrorModal = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  & .header {
    background: #f6bb43;
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

// portal 준비
const PortalBackdrop = (props) => {
  return <Backdrop onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <PortalBackdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          title={props.title}
          message={props.message}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
