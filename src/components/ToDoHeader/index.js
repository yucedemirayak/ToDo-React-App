import React from 'react'
import './style.css'

const TodoHeader = ({setShow}) => {
  return (
    <section className='todo-header' id="todo-header">
        <h1 className='todo-title'>TODO</h1>
        <div className='todo-button-group d-flex justify-content-end'>
          <button className='todo-add-icon' onClick={() => {setShow(true)}}>
            <i className='fa-solid fa-plus'></i>
          </button>
        </div>
      </section>
  )
}

export default TodoHeader