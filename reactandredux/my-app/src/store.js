import {createStore, combineReducers} from 'redux'
import {reducer as todoReducer} from './todos'
const initvalue = {
  todos: [
    {
      text: 'test',
      completed: false,
      id: 0
    },
  ],
  filter: 'all'
}

const allreducer = combineReducers({todos: todoReducer})
const store = createStore(allreducer, initvalue)
console.log(store.getState())

export default store
