import { useEffect, useState } from "react";
import "./App.scss";
import ToDoHeader from "./components/ToDoHeader";
import ToDoList from "./components/ToDoList";
import ToDoAdd from "./components/ToDoAdd";
import Background from "./components/ToDoAdd/Background";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { object } from "yup";

function App() {
  const [isShow, setShow] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [isUpdate, setUpdate] = useState(false);
  const [updatedTodo, getUpdatedTodo] = useState(object);

  const getTodos = async () => {
    axios
      .get("https://localhost:7139/api/Todo")
      .then((res) => setTodoList(res.data));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="app-container">
      {isShow ? <Background setShow={setShow} /> : null}
      <ToDoHeader setShow={setShow} />
      <ToDoList
        todoList={todoList}
        getTodos={getTodos}
        setShow={setShow}
        getUpdatedTodo={getUpdatedTodo}
        setUpdate={setUpdate}
      />
      {isShow ? (
        <ToDoAdd
          setShow={setShow}
          getTodos={getTodos}
          updatedTodo={updatedTodo}
          getUpdatedTodo={getUpdatedTodo}
          isUpdate={isUpdate}
          setUpdate={setUpdate}
        />
      ) : null}
      <Toaster
        toastOptions={{
          // Define default options
          className: "toaster-pos",
        }}
      />
    </div>
  );
}

export default App;
