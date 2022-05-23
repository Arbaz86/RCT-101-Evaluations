import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({ todos, onDelete }) => {
  // NOTE: do not delete `data-cy` key value pair

  console.log(todos);

  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {todos.map((task) => (
          <Task key={task.id} text={task.text} count={task.count} id={task.id} onDelete={onDelete} done={task.done} />
        ))}
      </ul>
      {todos.length === 0 ? (
        <div data-cy="tasks-empty" className={styles.empty}>
          {/* Show when No Tasks are present */}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Tasks;
