import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const yearChangeHandler = (data) => {
    setFilteredYear(data);
  };
  const filteredList = items.filter(
    (item) => item.date.getFullYear() === parseInt(filteredYear)
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={filteredYear}
          onYearChangeHandler={yearChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredList}></ExpensesChart>
        <ExpensesList items={filteredList}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
