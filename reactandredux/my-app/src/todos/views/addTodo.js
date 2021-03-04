import React, {Component} from 'react'

class Addtodo extends Component {

  Addtodo = () => { 
    const onSubmit = () => {
      console.log(123);
    }
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