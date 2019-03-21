import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
// import Workout from ''

const Splash = () => {

  return (
    <div>
      <h1 className="splash-hdr">Pocket Spotter</h1>
      <NavLink to='/Workout' className="splash-btn">Workout Now</NavLink>
      <NavLink to='/Calendar' className="splash-btn">Calendar</NavLink>
      <Switch>
        {/* <Route exact path='/' component={Splash}/>
        <Route exact path='/' component={Workout}/>
        <Route exact path='/' component={Calendar}/> */}
      </Switch>
    </div>
  )
}

export default Splash