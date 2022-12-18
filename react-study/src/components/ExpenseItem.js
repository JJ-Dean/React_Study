import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>December 18th 2022</div>
      <div className="expense-item__description">
        <h2>cooking ingredients</h2>
        <div className="expense-item__price">56,000₩</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
