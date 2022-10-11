import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {
      title: "inurance",
      amount: "250",
      date: new Date(),
    },
    {
      title: "inurance-2",
      amount: "350",
      date: new Date(),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>THIS IS A PARAGRAPH!</p>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
