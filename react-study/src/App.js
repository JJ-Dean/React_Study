import Expense from './components/Expenses/Expense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: '냄비 세트',
      amount: 121000,
      date: new Date(2022, 5, 10),
    },
    { id: 'e2', title: '모니터', amount: 434000, date: new Date(2021, 5, 12) },
    {
      id: 'e3',
      title: '노트북 받침대',
      amount: 10000,
      date: new Date(2022, 7, 28),
    },
    {
      id: 'e4',
      title: '책상 (나무)',
      amount: 230000,
      date: new Date(2022, 12, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense categories={expenses}></Expense>
    </div>
  );
}

export default App;
