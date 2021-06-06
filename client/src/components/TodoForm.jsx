import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      //reset task input
      setTodo({ ...todo, task: "" });
    }
  }

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">submit</Button>
    </form>
  );
}

export default TodoForm;
