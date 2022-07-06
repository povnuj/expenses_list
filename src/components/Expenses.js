import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter.js";
import ExpensesList from "./ExpensesList/ExpensesList.js";
import ChartBarLable from "./Chart/ChartBarLable.js";
import React, { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const selectedDropdown = (selectYear) => {
    setFilteredYear(selectYear);
  };
  const filterChange = props.val.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });
  //console.log(filterChange);

  return (
    <Card className="expenses">
      <ExpensesFilter select={filteredYear} onFilterChange={selectedDropdown} />
      <ChartBarLable expenseDates={filterChange} />
      <ExpensesList items={filterChange} />
    </Card>
  );
}
export default Expenses;
