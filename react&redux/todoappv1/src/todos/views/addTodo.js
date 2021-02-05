import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions.js';
class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.refInput = this.refInput.bind(this)
  }
  refInput (node) {
    this.input = node
  }
  onSubmit (ev) {
    ev.preventDefault();
    const inputVal = this.input
    if(!inputVal.value.trim()) {
      return false
    }
    this.props.onAdd(inputVal.value)
    inputVal.value = ''
  }
  render () {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" placeholder="请输入待办事项" ref={this.refInput} />
          <button className="add-btn" type="submit">添加</button>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    }
  }
};
export default connect(null, mapDispatchToProps)(AddTodo);