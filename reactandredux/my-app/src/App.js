import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import {getList} from './actions'

import {view as WeatherView} from './weather'
class App extends Component {
  constructor(props) {
    super(props)
  }
  // componentDidMount () {
  //   this.props._getList(1)
  // }
  render() {
    return (
      <div>
        <WeatherView />
        {/* {this.props.list.map(item => (<p>{item}</p>))} */}
      </div>
    )
  }
}

// const mapStateProps = (state) => {
//   return {
//     list: state.list
//   }
// }

// const mapDispatchToProps = {
//   _getList: getList
// }

// export default connect(mapStateProps, mapDispatchToProps)(App)
export default App
