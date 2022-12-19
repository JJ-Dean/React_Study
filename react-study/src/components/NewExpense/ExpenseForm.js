import React from 'react';

import './ExpenseForm.css';

const NewExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>물품 이름</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>가격</label>
          <input type="number" min="10" step="10" />
        </div>
        <div className="new-expense__control">
          <label>날짜</label>
          <input type="date" min="2022-01-01" max="2023-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">지출 추가</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
