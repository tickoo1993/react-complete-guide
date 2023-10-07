import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  let data = [
    { date: new Date(), title: "Car ins", amount: 290 },
    { date: new Date(), title: "Car ins", amount: 301 },
    { date: new Date(), title: "Car ins", amount: 100 },
    { date: new Date(), title: "Car ins", amount: 50 },
  ];

  const [items, setItems] = useState(data);

  const addExpenseHandler = (item) => {
    item.date = new Date();
    setItems(prevState => [...prevState,item])
  }

  return (
    <div className="App">
      <NewExpense onAddExpenseHandler={addExpenseHandler}></NewExpense>
      <Expenses items={items}></Expenses>
    </div>
  );
}

export default App;
