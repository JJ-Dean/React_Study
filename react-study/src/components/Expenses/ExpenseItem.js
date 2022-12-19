import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // document.getElementById('~~').addEventListner(); => 명령식 방식
  const [title, setTitle] = useState(props.title);
  // [바뀔 값, 바꿀 수 있는 함수]
  // 값이 바뀌지만 const로 정의해도 되는 이유
  //  => '='처럼 등호 연사자로 새로운 값을 할당하는게 아니라 setTitle 이라는 함수로 변경을 예약하는 방식이기 때문에 const로 정의해도 상관 없다.
  const clickHandler = () => {
    setTitle('부엌 칼 세트');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}₩</div>
      </div>
      <button onClick={clickHandler}>품목 이름 바꾸기</button>
    </Card>
  );
};

export default ExpenseItem;
