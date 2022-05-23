import React, { useState } from "react";
import styles from "./taskApp.module.css";

import TaskHeader from "./TaskHeader/TaskHeader"
import AddTask from './AddTask/AddTask';
import Tasks from './Tasks/Tasks';
import data from "../data/tasks.json"
import { v4 as uuid } from "uuid"


const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair


  const [todos, setTodos] = useState(data);

  const handleText = (text) => {

    const payload = {
      "id": uuid(),
      "text": text,
      "done": false,
      "count": 1
    }

    setTodos([...todos, payload])
  }

  const onDelete = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id))
  }

  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader todos={todos} />
      {/* Add Task */}
      <AddTask handleText={handleText} />
      {/* Tasks */}
      <Tasks todos={todos} onDelete={onDelete} />
    </div>
  );
};

export default TaskApp;
