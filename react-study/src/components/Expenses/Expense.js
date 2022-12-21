import React, { useState } from 'react';

import ExpensesFilter from '../NewExpense/ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

import './Expense.css';

const Expense = (props) => {
  // document.getElementById('~~').addEventListner(); => 명령식 방식
  const [filterdYear, setFilteredYear] = useState('2021');
  // [바뀔 값, 바꿀 수 있는 함수]
  // 값이 바뀌지만 const로 정의해도 되는 이유
  //  => '='처럼 등호 연사자로 새로운 값을 할당하는게 아니라 setTitle 이라는 함수로 변경을 예약하는 방식이기 때문에 const로 정의해도 상관 없다.

  const saveYearDataHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onSaveYearData={saveYearDataHandler}
        />
        {props.categories.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expense;
