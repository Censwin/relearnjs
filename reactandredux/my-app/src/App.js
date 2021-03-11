import React, { Component } from 'react'
import {View as WeatherView} from './weather'
class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <WeatherView />
      </div>
    )
  }
}
export default App
