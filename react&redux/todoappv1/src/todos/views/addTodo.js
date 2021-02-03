import React,{Component} from 'react';

class AddTodo extends Component {
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
      <div>
        <form onSubmit={this.onSubmit}>
          <input placeholder="请输入待办事项" ref={this.refInput} />
          <button type="submit">添加</button>
        </form>
      </div>
    )
  }
}
export default AddTodo