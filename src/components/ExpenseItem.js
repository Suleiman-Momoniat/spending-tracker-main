import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { title, amount, date } = props;
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">{title}</div>
      <div className="expense-item__price">${amount}</div>
    </div>
  );
}

export default ExpenseItem;
