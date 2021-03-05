import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import TodoItem from './todoItem'
import {bindActionCreators} from 'redux';
const TodoList = (props) => { 
  const {onToggleTodo,onRemoveTodo} = props
  return (
    <ul>
      {props.todos.map(item => {
        return <TodoItem
        key={item.id + item.text}
        text={item.text}
        completed={item.completed}
        onToggle={() => onToggleTodo(item.id)}
        onRemove={() => onRemoveTodo(item.id)}
      />
      })}
    </ul>
  )
}
const mapStateProps = (state) => {
  return {
    todos: state.todos
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onToggleTodo: (id) => {
//       dispatch(actions.togtodo(id));
//     },
//     onRemoveTodo: (id) => {
//       dispatch(actions.removetodo(id));
//     }
//   };
// };

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   onToggleTodo: actions.togtodo,
//   onRemoveTodo: actions.removetodo
// },dispatch)

const mapDispatchToProps = {
  onToggleTodo: actions.togtodo,
  onRemoveTodo: actions.removetodo
}

export default connect(mapStateProps, mapDispatchToProps)(TodoList)