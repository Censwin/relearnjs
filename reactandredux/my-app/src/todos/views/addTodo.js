import React, {Component} from 'react'

class Addtodo extends Component {
  constructor(){
    super(...arguments)
    this.refInput = this.refInput.bind(this)
  }
  onSubmit(ev){
    ev.preventDefault();

    const input = this.input;
    if (!input.value.trim()) {
      return;
    }

    this.props.onAdd(input.value);
    input.value = '';
  }
  refInput(node) {
    this.input = node
  }
  render () {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <input placeholder="please input text" ref={this.refInput} />
        <button type="submit">
          添加
        </button>
      </form>
      </div>
    )
  }
}

export default Addtodo