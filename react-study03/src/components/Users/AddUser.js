import React from 'react';

import Card from '../UI/Card';

import styled from 'styled-components';

const FormContrl = styled(Card)`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <FormContrl>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">이름</label>
        <input id="username" type="text" />
        <label htmlFor="age">나이</label>
        <input id="age" type="number" />
        <button type="submit">유저 추가</button>
      </form>
    </FormContrl>
  );
};

export default AddUser;

// html의 속성인 label 에서 쓰던 for 어트리뷰트는 JSX에서는 htmlFor 로 쓰인다.
