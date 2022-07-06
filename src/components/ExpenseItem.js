import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenceItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("new value");
    console.log("Clicked");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">{props.amount} грн</div>
        
      </Card>
    </li>
  );
}
export default ExpenceItem;
