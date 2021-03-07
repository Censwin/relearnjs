import React, {Component} from 'react'
import {connect} from 'react-redux';
import {addtodo} from '../actions'
class Addtodo extends Component {
  constructor(){
    super(...arguments)
    this.refInput = this.refInput.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      value: ''
    }
  }
  onSubmit(ev){
    ev.preventDefault();
    if (!this.state.value.trim()) {
      return;
    }
    this.props.onAdd(this.state.value);
    this.setState({value: ''})
  }
  refInput(node) {
    this.input = node
  }
  onInputChange (ev) {
    this.setState({value: ev.target.value})
  }
  render () {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <input placeholder="please input text" value={this.state.value} onChange={ev => this.onInputChange(ev)}/>
        <button type="submit">
          添加
        </button>
      </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addtodo(text))
    }
  }
}

export default connect(null,mapDispatchToProps)(Addtodo)