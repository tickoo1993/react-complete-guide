import React from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem"

const Expenses = ({items}) => {
    return (
        <Card className="expenses">
        {items.map((item,index) => (
            <ExpenseItem key={index} item={item}></ExpenseItem>
          ))}</Card>
    );
}

export default Expenses;