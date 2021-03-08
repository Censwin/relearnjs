import {createStore} from 'redux';
import reducer from './reducer'
const init = {list:[9,9,9]}

const store = createStore(reducer,init)
export default store