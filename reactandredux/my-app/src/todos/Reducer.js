import * as actionType from './actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case actionType.ADD : {
      return [
        {
          id: action.id,
          completed: action.completed,
          text: action.text
        },
        ...state
      ]
    }
    case actionType.TOG: {
      return state.map(item => {
        if (item.id === action.id) {
          item.completed = true
        }
        return item
      })
    }
    case actionType.REMOVE: {
      return state.filter(item => item.id != action.id)
    }
    default: {
      return state
    }
  }
}