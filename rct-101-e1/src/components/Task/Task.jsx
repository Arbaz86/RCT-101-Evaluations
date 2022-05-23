import React, { useState } from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"
import remove from "../../assets/remove.svg";

const Task = ({ text, count, id, onDelete, done }) => {
  // NOTE: do not delete `data-cy` key value pair

  const [isCompleted, setIsCompleted] = useState(done);
  return (
    <li data-cy="task" className={styles.task} >
      <input type="checkbox" data-cy="task-checkbox" checked={isCompleted}
        onChange={(e) => {
          setIsCompleted(e.target.checked);
          console.log(e.target.checked);
        }} />
      <div data-cy="task-text" className={isCompleted ? styles.striked : styles.notStriked}  >
        {text}
      </div>
      {/* Counter here */}
      <Counter count={count} />
      <button data-cy="task-remove-button" onClick={() => onDelete(id)}>
        <img src={remove} alt="" />
      </button>
    </li>
  );
};

export default Task;
