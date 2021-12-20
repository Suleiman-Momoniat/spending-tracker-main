import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2020");

  const filterHandler = (filteredDate) => {
    setFilterDate(filteredDate);
  };

  return (
    <div>
      <ExpensesFilter value={filterDate} onChangeFilter={filterHandler} />
      <Card className="expenses">
        {props.expenses.map((expenseItem) => {
          return (
            <ExpenseItem
              title={expenseItem.title}
              amount={expenseItem.amount}
              date={expenseItem.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
