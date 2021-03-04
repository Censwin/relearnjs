import * as actionType from './actionTypes'

let nextTodoId = 0

export const addtodo = (text) => {
  return {
    type: actionType.ADD,
    text: text,
    id: nextTodoId ++,
    completed: false
  }
}
export const togtodo = (id) => {
  return {
    type: actionType.TOG,
    id
  }
}
export const removetodo = (id) => {
  return {
    type: actionType.REMOVE,
    id
  }
}