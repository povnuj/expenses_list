import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveLoadItems } from "../../store/items";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const dispatch = useDispatch();
  const titleChange = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChange = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChange = (event) => {
    setEnteredDate(event.target.value);
  };
  let isValidBtn = (
    <button disabled={true} id="btnSubmit" type="submit">
      Добавити
    </button>
  );

  if (enteredAmount !== "" && enteredDate !== "" && enteredTitle !== "") {
    isValidBtn = <button type="submit">Добавити</button>;
  }
  const userName = localStorage.getItem("email") + ".json";

  const submitHendler = (event) => {
    event.preventDefault();
    const sendData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    dispatch(
      saveLoadItems(
        "https://sushi-5aab6-default-rtdb.firebaseio.com/" + userName,
        {
          method: "POST",
          body: JSON.stringify(sendData),
        }
      )
    );
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <>
      <form onSubmit={submitHendler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Назва витрат</label>
            <input type="text" value={enteredTitle} onChange={titleChange} />
          </div>

          <div className="new-expense__control">
            <label>Сума витрат</label>
            <input
              type="number"
              value={enteredAmount}
              onChange={amountChange}
            />
          </div>

          <div className="new-expense__control" onChange={dateChange}>
            <label>Дата</label>
            <input
              type="date"
              min="2020-01-01"
              max="2023-01-01"
              onChange={dateChange}
              value={enteredDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          {isValidBtn}
          <button onClick={props.onStop}>Згорнути</button>
        </div>
      </form>
    </>
  );
};
export default ExpenseForm;
