import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  setNewTask,
  toggleComplete,
  updateTodo,
} from "../redux/todoSlice";

function TodoList() {
  const newTask = useSelector((state) => state.count.newTask);
  const task = useSelector((state) => state.count.tasks);

  /*
    Cách 1: Khai báo state newTask tại component
    Cách 2: Xử lý logic trong store
  */
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addTodo({
        id: Date.now(),
        text: newTask,
        complete: false,
      })
    );

    dispatch(setNewTask(""));
  };

  const [select, setSelect] = useState(null);

  const handleEdit = (e) => {
    setSelect(e);
    dispatch(setNewTask(e.text));
  };

  const handleUpdate = () => {
    dispatch(updateTodo({ ...select, text: newTask }));
    dispatch(setNewTask(""));
    setSelect(null);
  };

  return (
    <div>
      <h3>Todolist</h3>
      <input
        type='text'
        value={newTask}
        onChange={(e) => dispatch(setNewTask(e.target.value))}
      />
      <button onClick={select ? handleUpdate : handleAdd}>
        {select ? "Update" : "Add"}
      </button>
      <ul>
        {task.map((e, i) => (
          <li key={i}>
            <span
              onClick={() => dispatch(toggleComplete(e.id))}
              style={{ textDecoration: e.complete ? "line-through" : "none" }}
            >
              {e.text}
            </span>
            <button onClick={() => handleEdit(e)}>Edit</button>
            <button onClick={() => dispatch(deleteTodo(e.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
