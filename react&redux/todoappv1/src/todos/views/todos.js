import React from 'react';
import AddTodo from './addTodo';
import TodoList from './todoList';

export default function todos() {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  )
}
