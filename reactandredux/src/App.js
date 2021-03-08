import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getList} from './actions'
const f = (x) => {
  return x() + 5
}

const g = () => {
  return 3 + 4
}
class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount () {
    this.props._getList(1)
  }
  render() {
    return (
      <div>
        {this.props.list.map(item => (<p>{item}</p>))}
      </div>
    )
  }
}

const mapStateProps = (state) => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = {
  _getList: getList
}

export default connect(mapStateProps, mapDispatchToProps)(App)
