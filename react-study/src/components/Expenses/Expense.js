import React, { useState } from 'react';

import ExpensesFilter from '../NewExpense/ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

import './Expense.css';

const Expense = (props) => {
  const expenses = props.categories;
  const [filterdYear, setFilteredYear] = useState('2021');

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
