import React, {useState} from "react";
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title,amount,date
        }
        // console.log(expenseData)
        props.onSaveExpenseData(expenseData);
        setTitle("");
        setAmount("");
        setDate("");
         
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="expense__actions">
                <button onClick={props.onCancel}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;