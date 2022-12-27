import React, { useState } from 'react';

import Card from '../UI/Card';

import styled from 'styled-components';
import Button from '../UI/Button';

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
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <FormContrl>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">이름</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">나이</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={AgeChangeHandler}
        />
        <Button type="submit">유저 추가</Button>
      </form>
    </FormContrl>
  );
};

export default AddUser;

// html의 속성인 label 에서 쓰던 for 어트리뷰트는 JSX에서는 htmlFor 로 쓰인다.
