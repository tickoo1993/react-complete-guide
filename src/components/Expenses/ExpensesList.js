import React from "react";
import "./ExpensesList.css"
import ExpenseItem from "../Expenses/ExpenseItem";


const ExpensesList = ({items}) =>{
    if(items.length === 0)
        return (<p className="expenses-list__fallback">No items.</p>)
    else{
        return (
            <ul className="expenses-list">
                 {items.map((item,index)=><ExpenseItem key={index} item={item}></ExpenseItem>)}
            </ul>
        )
    }
}

export default ExpensesList;