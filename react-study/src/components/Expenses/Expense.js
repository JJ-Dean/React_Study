import React, { useState } from 'react';

import ExpensesFilter from '../NewExpense/ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

import './Expense.css';

const Expense = (props) => {
  // document.getElementById('~~').addEventListner(); => 명령식 방식
  const [filteredYear, setFilteredYear] = useState('2021');
  // [바뀔 값, 바꿀 수 있는 함수]
  // 값이 바뀌지만 const로 정의해도 되는 이유
  //  => '='처럼 등호 연사자로 새로운 값을 할당하는게 아니라 setTitle 이라는 함수로 변경을 예약하는 방식이기 때문에 const로 정의해도 상관 없다.

  const saveYearDataHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.categories.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // JSX 코드 안에 조건문을 작성하고 싶으면 이렇게 작성한다.
  // {filteredExpenses.length === 0 ? (
  //   <p>해당 년도의 정보가 없습니다.</p>
  // ) : (
  //   filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ))
  // )}
  let expensesContent = <p>해당 년도의 정보가 없습니다.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveYearData={saveYearDataHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expense;
