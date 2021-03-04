import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const TodoList = (props) => { 
  return (
    <ul>
      {props.todos.map(item => {
        return <li key={item.id+item.text}>item.text</li>
      })}
    </ul>
  )
}
const mapStateProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => {
      dispatch(actions.togtodo(id));
    },
    onRemoveTodo: (id) => {
      dispatch(actions.removetodo(id));
    }
  };
};

export default connect(mapStateProps, mapDispatchToProps)(TodoList)