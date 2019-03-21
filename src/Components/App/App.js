import React, { Component } from 'react'
import './App.scss'
import Splash from '../Splash/Splash'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  

  render() {
    return (
      <div className="App">
        <Splash />
      </div>
    )
  }
}

export default App;
