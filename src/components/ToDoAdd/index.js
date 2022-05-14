import React, { useEffect } from "react";
import "./style.scss";
import { Form, Formik } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";

let todoFormValidationSchema = yup.object().shape({
  title: yup.string().required("Please add'a title."),
  desc: yup.string(),
});

const ToDoAdd = ({ setShow, getTodos ,updatedTodo , isUpdate , setUpdate}) => {
  const adddTodoItemToList = (newTodoItem) => {
    axios
      .post("https://localhost:7139/api/Todo/", newTodoItem)
      .finally(() => {
        getTodos();
      });
  };

  const setValues = () => {
    if (isUpdate) {
      document.getElementById("task-title").value = updatedTodo.title;
      document.getElementById("task-description").value = updatedTodo.description;
    }
  }
  useEffect( () => {
    //FIXME: Values are not loaded on first load
    setValues();
    return () => {
      setUpdate(false);
    }
  });
  return (
    <section className="todo-container-add show" id="add-task-container">
      <Formik
        className="todo-add"
        id="add-task"
        initialValues={{ title: "", description: "" }}
        validationSchema={todoFormValidationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const newTodoItem = {...values , isComplete: false };
          adddTodoItemToList(newTodoItem);
          setShow(false);
          document.getElementById("todoForm").reset();
        }}
      >
        {({ isSubmitting, errors, touched, handleChange, onSubmit }) => (
          <Form id="todoForm" className="todo-form">
            <input
              name="title"
              className="todo-form-title"
              type="text"
              placeholder="Title"
              id="task-title"
              maxLength="50"
              onChange={handleChange}
            />
            <textarea
              className="todo-form-description"
              name="description"
              id="task-description"
              maxLength="200"
              type="text"
              spellCheck="false"
              placeholder="Description"
              onChange={handleChange}
            ></textarea>
            <button
              className="todo-create-button row"
              type="submit"
              onClick={() => {
                //FIXME: When pressed 1st time, toast screen do not show up.
                if (errors.title && touched.title) {
                  toast.error(errors.title);
                }
              }}
            >
              <div className="col-1"></div>
              <span className="todo-create-text col-10">Create</span>
              <i className="fa-solid fa-check todo-check-img col-1"></i>
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ToDoAdd;
