import React from 'react'
import { Route, NavLink } from 'react-router-dom'

const Splash = () => {

  return (
    <div>
      <h1 className="splash-hdr">Pocket Spotter</h1>
      <NavLink to='/Workout' className="splash-btn">Workout Now</NavLink>
      <NavLink to='/Calendar' className="splash-btn">Calendar</NavLink>
    </div>
  )
}

export default Splash