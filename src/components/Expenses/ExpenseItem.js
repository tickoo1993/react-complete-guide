import React from "react";
import './ExpenseItem.css'
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem= (props)=>{
    const {date,title ,amount} = props.item
    return (
        <Card className="expense-item">
            <ExpenseDate date={date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
        </Card>
    );
}
export default ExpenseItem;