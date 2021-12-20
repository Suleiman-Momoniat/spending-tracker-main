import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const filterHandler = (filteredYear) => {
    setFilterYear(filteredYear);
  };

  const filteredExpenses = props.expenses.filter((expense)=>{
      return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <ExpensesFilter value={filterYear} onChangeFilter={filterHandler} />
      <Card className="expenses">
        {filteredExpenses.map((expenseItem) => {
          return (
            <ExpenseItem
              key={expenseItem.id}
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
