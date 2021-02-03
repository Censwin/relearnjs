import React from 'react';
import TodoItem from './todoItem'
export default function TodoList({todos, onToggleTodo, onRemoveTodo}) {
  return (
    <ul>
      {
        todos.map(item => (
          <TodoItem
            key={item.id}
            text={item.text}
            completed={item.completed}
            onToggle={() => onToggleTodo(item.id)}
            onRemove={() => onRemoveTodo(item.id)}
          />
        ))
      }
    </ul>
  )
}
