import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses.js";
import AddExpense from "./components/AddExpense/AddExpense.js";

const expensesList = [
  { id: "d1", date: new Date(2021, 1, 1), amount: 123, title: "Телефон" },
  { id: "b2", date: new Date(2020, 2, 1), amount: 222, title: "Стіл" },
  { id: "b3", date: new Date(2021, 3, 1), amount: 523, title: "Послуги дизайнера" },
];
function App() {
  const [expensVal, setExpensVal] = useState(expensesList);

  const addNewExpenseData = (values) => {
    console.log(values);
    setExpensVal((addNew) => {
      return [values, ...addNew];
    });
  };
  return (
    <div>
      <AddExpense onSaveExpense={addNewExpenseData} />
      <Expenses val={expensVal} />
    </div>
  );
}

export default App;
