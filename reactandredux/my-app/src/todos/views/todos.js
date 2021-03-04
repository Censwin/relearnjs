import React from 'react'
import TodoList from './todoList'
import Addtodo from './addTodo'

const TodoApp = () => { 
  return (
    <div>
      <Addtodo />
      <TodoList />
    </div>
  )
}

export default TodoApp