import { useState } from 'react';
import './App.scss';
import ToDoHeader from './components/ToDoHeader';
import ToDoList from './components/ToDoList'
import ToDoAdd from './components/ToDoAdd';
import Background from "./components/ToDoAdd/Background";

function App() {
  const [isShown, setShow] = useState(false);

  return (
    <div className="app-container">
      {isShown ? <Background setShow={setShow} /> : null}
      <ToDoHeader setShow={setShow} />
      <ToDoList/>
      {isShown ? <ToDoAdd setShow={setShow} /> : null}
    </div>
  );
}

export default App;
