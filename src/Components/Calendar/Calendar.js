import React, { Component } from 'react'

export default class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  calendarChange = (e) => {
    const date = e.target.value
    this.setState({value: date})
  }

  render() {
    return (
      <div>
        <input
          type="date"
          onChange={(e) => this.calendarChange(e)}
        />
      </div>
    )
  }
}