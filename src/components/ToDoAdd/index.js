import React from "react";
import "./style.css";

const ToDoAdd = ({ setShow }) => {
  return (
    <section className="todo-container-add show" id="add-task-container">
      <form className="todo-add" id="add-task">
        <input
          className="todo-form-title"
          type="text"
          placeholder="Title"
          id="new-task-title"
          maxLength="50"
        />
        <textarea
          className="todo-form-description"
          name=""
          id="new-task-description"
          maxLength="200"
          type="text"
          spellCheck="false"
          placeholder="Description"
        ></textarea>
        <button className="todo-create-button row">
          <div className="col-1"></div>
          <span className="todo-create-text col-10">Create</span>
          <i className="fa-solid fa-check todo-check-img col-1"></i>
        </button>
      </form>
    </section>
  );
};

export default ToDoAdd;
