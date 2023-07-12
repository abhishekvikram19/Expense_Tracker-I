import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";

export default function ExpenseForm(props) {
  const [expenseText, setExpenseText] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (expenseText.trim().length === 0 || expenseAmount.trim().length === 0) {
      return;
    }

    const expense = {
      id: Math.random().toString(),
      text: expenseText,
      amount: +expenseAmount,
    };

    props.onAddExpense(expense);

    setExpenseText("");
    setExpenseAmount("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        value={expenseText}
        onChange={(e) => setExpenseText(e.target.value)}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense, positive - income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
        required
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
}
