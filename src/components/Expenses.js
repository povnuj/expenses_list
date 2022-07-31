import ExpensesFilter from "./ExpenseFilter/ExpensesFilter.js";
import ExpensesList from "./ExpensesList/ExpensesList.js";
import ChartBarLable from "./Chart/ChartBarLable.js";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Expenses.css";
import Card from "./Card";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  let expListLoad = useSelector((state) => state.item.list);
  const expenseList = expListLoad.map((items) => {
    return {
      id: items.id,
      date: new Date(items.date),
      title: items.title,
      amount: items.amount,
    };
  });
  const selectedDropdown = (selectYear) => {
    setFilteredYear(selectYear);
  };

  const filterChange = expenseList.filter((expenses) => {
    if (expenseList.length !== 0) {
      return expenses.date.getFullYear().toString() === filteredYear;
    }
    return null;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter select={filteredYear} onFilterChange={selectedDropdown} />
      <ChartBarLable expenseDates={filterChange} />
      <ExpensesList items={filterChange} />
    </Card>
  );
}
export default Expenses;
