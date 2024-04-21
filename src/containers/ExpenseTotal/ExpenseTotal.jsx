import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const income = useSelector((store) => store.EXPENSE.income);
  const totalExpenses = expenseList.reduce((acc, currentItem) => {
    return acc + currentItem.price;
  }, 0);
  const remainingMoney = income - totalExpenses;

  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExpenses} €</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        {remainingMoney && (
          <div
            className={`col ${s.amount}`}
            style={{ color: remainingMoney < 0 ? "red" : "green" }}
          >
            {remainingMoney} €
          </div>
        )}
      </div>
    </div>
  );
}
