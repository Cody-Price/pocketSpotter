import React, { Component } from 'react'
import '../../index.css'
import { Route, NavLink, Switch } from 'react-router-dom'
import Workout from '../Workout/Workout'
import Calendar from '../Calendar/Calendar'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  

  render() {
    return (
      <div className="App">
        <NavLink to='/Workout' className="splash-btn">Workout</NavLink>
        <NavLink to='/Calendar' className="splash-btn">Calendar</NavLink>
        <Switch>
          <Route exact path='/Workout' component={Workout}/>
          <Route exact path='/Calendar' component={Calendar}/>
        </Switch>
      </div>
    )
  }
}

export default App;
