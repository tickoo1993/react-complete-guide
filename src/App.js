import "./App.css";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const items = [
    { date: new Date(), title: "Car ins", amount: "$290" },
    { date: new Date(), title: "Car ins", amount: "$290" },
    { date: new Date(), title: "Car ins", amount: "$290" },
    { date: new Date(), title: "Car ins", amount: "$290" },
  ];

  return (
    <div className="App">
      <Expenses items={items}></Expenses>
    </div>
  );
}

export default App;
