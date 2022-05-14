import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import "./style.css";

const ToDoList = ({ todoList, getTodos , setShow, getUpdatedTodo , setUpdate}) => {
  const removeTask = (todoId) => {
    axios.delete("https://localhost:7139/api/Todo?id=" + todoId)
    .then((res) => {
      toast.success(`Task title : "${res.data.title}" deleted.`);
    })
      .finally(() => {getTodos();});
  };
  const completeTask = (todoId) => {
    axios.patch("https://localhost:7139/api/Todo?id=" + todoId)
    .finally(() => {
      getTodos();
    });
  };

  const updateTask = (todoId) => {
    axios.get("https://localhost:7139/api/Todo?id=" + todoId)
    .then(res => getUpdatedTodo(res.data))
    .then(setShow(true))
    .then(setUpdate(true));
  }

  return <ul className="todo-record-list" id="todo-list">
    {todoList.map((todoItem, index) => {
      return <li key={index} className={"todo-record row " + (todoItem.isComplete ? "todo-checked" : "")} data-id={todoItem.id}>
        <button className="todo-checkbox col-1 offset-1 col-md-1 offset-md-1"
        onClick={(e) => {completeTask(todoItem.id)}}
        data-id={todoItem.id}
        ></button>
        <div className="todo-record-text col-8 col-md-8" onClick={() => {updateTask(todoItem.id)} }>
          <h2>
            {todoItem.title}
            <div className="text-line-through"></div>
          </h2>
          <h3>{todoItem.description}</h3>
        </div>
        <button className="todo-delete col-2 col-md-2"
                onClick={() => { removeTask(todoItem.id) }}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </li>
    })}
  </ul>;
};

export default ToDoList;
