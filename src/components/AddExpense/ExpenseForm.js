import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChange = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChange = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChange = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHendler = (event) => {
    event.preventDefault();
    const sendData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveNewExpense(sendData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHendler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Витрати</label>
          <input type="text" value={enteredTitle} onChange={titleChange} />
        </div>

        <div className="new-expense__control">
          <label>Сума</label>
          <input
            type="number"
            min="1"
            step="0.1"
            value={enteredAmount}
            onChange={amountChange}
          />
        </div>

        <div className="new-expense__control" onChange={dateChange}>
          <label>Дата</label>
          <input
            type="date"
            min="2018.01.01"
            max="2023.01.01"
            onChange={dateChange}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onStop} >Відміна</button>
        <button type="submit">Добавити</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
