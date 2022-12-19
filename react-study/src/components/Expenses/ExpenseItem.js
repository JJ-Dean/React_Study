import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // document.getElementById('~~').addEventListner(); => 명령식 방식
  const clickHandler = () => {
    console.log('클릭했니');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}₩</div>
      </div>
      <button onClick={clickHandler}>품목 이름 바꾸기</button>
    </Card>
  );
};

export default ExpenseItem;
