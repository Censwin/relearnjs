import React, { Component } from 'react'
import { connect } from 'react-redux'

import {getList} from './actions'
class View extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.list.map((item, index) => (<p key={item+index}>{item}</p>))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = {
  _getlist: getList
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
