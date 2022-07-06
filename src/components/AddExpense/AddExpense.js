import React, { useState } from "react";
import "./AddExpense.css";
import ExpenseFrom from "./ExpenseForm";
const AddExpense = (props) => {
  const saveNewExpense = (enteredExpenseData) => {
    const expenseData = {
      
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onSaveExpense(expenseData);
  };
  const changeStatusToStart = () => {
    setIsEditing(true);
  };
  const changeStatusToStop = () => {
    setIsEditing(false);
  };
  const [isEditing, setIsEditing] = useState(false);
  let valuesSHow = <button onClick={changeStatusToStart}>Добавити витрати</button>; 
  if(isEditing) {
    valuesSHow = <ExpenseFrom onSaveNewExpense={saveNewExpense} onStop={changeStatusToStop} />;
  }
  return (
    <div className="new-expense">
      {valuesSHow}
    
    </div>
  );
};
export default AddExpense;
