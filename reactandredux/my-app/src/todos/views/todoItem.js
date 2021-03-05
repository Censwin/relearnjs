import React from 'react'

const TodoItem = (props) => {
  const {text,completed,onToggle,onRemove} = props
  const checkedProp = completed ? {checked: true} : {};
  return (
    <li
      className="todo-item"
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      <input  type="checkbox" {...checkedProp} readOnly onClick={onToggle} />
      <label >{text}</label>
      <button  onClick={onRemove}>×</button>
    </li>
  )
}

export default TodoItem