import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expense from './components/Expenses/Expense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: '냄비 세트',
    amount: 121000,
    date: new Date(2019, 5, 10),
  },
  { id: 'e2', title: '모니터', amount: 434000, date: new Date(2020, 5, 12) },
  {
    id: 'e3',
    title: '노트북 받침대',
    amount: 10000,
    date: new Date(2021, 7, 28),
  },
  {
    id: 'e4',
    title: '책상 (나무)',
    amount: 230000,
    date: new Date(2022, 11, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense categories={expenses}></Expense>
    </div>
  );
};

export default App;
