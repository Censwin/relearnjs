import React from 'react';
import AddTodo from './addTodo';
import TodoList from './todoList';

import './style.css';

export default function todos() {
  return (
    <div className="todos">
      <AddTodo />
      <TodoList />
    </div>
  )
}
