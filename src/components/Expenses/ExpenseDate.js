import React from "react"
import './ExpenseDate.css'

const ExpenseDate = ({date}) => {
    const month = date.toLocaleDateString('en-US',{month:'long'})
    const day = date.toLocaleDateString(month,{day:"2-digit"})
    const year = date.getFullYear();
    return (
        <div className="expense-date">
            <div className="date__month">{month}</div>
            <div className="date__year">{year}</div>
            <div className="date__day">{day}</div>
        </div>
    )
}

export default ExpenseDate;