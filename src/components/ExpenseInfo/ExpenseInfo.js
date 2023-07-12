import React from "react";
import styles from "./ExpenseInfo.module.css";

export default function ExpenseInfo({ expenses }) {
  const getTotalBalance = () => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    return total.toFixed(2);
  };

  const getTotalIncome = () => {
    const income = expenses
      .filter((expense) => expense.amount > 0)
      .reduce((sum, expense) => sum + expense.amount, 0);
    return income.toFixed(2);
  };

  const getTotalExpense = () => {
    const expense = expenses
      .filter((expense) => expense.amount < 0)
      .reduce((sum, expense) => sum + expense.amount, 0);
    return Math.abs(expense).toFixed(2);
  };

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${getTotalBalance()}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${getTotalIncome()}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${getTotalExpense()}
          </p>
        </div>
      </div>
    </div>
  );
}
