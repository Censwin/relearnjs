import {get} from './actionType'


export default (state, action) => {
  switch (action.type) {
    case get: {
      return {list: [1,2,3]}
    }
    default: 
    return state
  }
}