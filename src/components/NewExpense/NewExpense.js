import React, { useState }  from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (val) => {
        const expenseData = {...val, id : Math.random(100000)};
        props.onAddExpenseHandler(expenseData);
        stopEditingHandler();
        // console.log(expenseData);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add new button</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm> }
        </div>
        
    )
}

export default NewExpense;