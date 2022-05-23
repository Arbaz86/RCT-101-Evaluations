import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({ count }) => {
  // NOTE: do not delete `data-cy` key value pair

  let [counter, setCounter] = useState(count);

  const handleIncrement = (value) => {
    setCounter(counter + value);
  }

  const handleDecrement = (value) => {
    if (counter > 1) {
      setCounter(counter + value);
    }
  }


  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={() => handleIncrement(1)}>+</button>
      <span data-cy="task-counter-value">{counter}</span>
      <button data-cy="task-counter-decrement-button" onClick={() => handleDecrement(-1)}>-</button>
    </div>
  );
};

export default Counter;
