import React, { useState } from "react";
import styles from "./addTask.module.css";
import { GoPlus } from "react-icons/go";

const AddTask = ({ handleText }) => {
  // NOTE: do not delete `data-cy` key value pair



  const [value, setValue] = useState("");



  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add task..." onChange={(e) => {
        if (value === "") {
          setValue(e.target.value)
        }
      }
      } />
      <button data-cy="add-task-button" onClick={() => { handleText(value) }}> <GoPlus /></button>
    </div>
  );
};

export default AddTask;
