import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO}from './actionTypes.js';

export default (state = [],action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
        ...state
      ]
    case TOGGLE_TODO: {
      return state.map(item => {
        if (item.id === action.id) {
          item.completed = true
        }
      })
    }
    case REMOVE_TODO: {
      return state.filter(item => item.id !== action.id)
    }
    default:
      return state
  }
}
