import React, { Component } from 'react'
import Exercise from '../Exercise/Exercise'
import { connect } from 'react-redux'
import { addExercise } from '../../actions/index'
import '../../index.css'

class Workout extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  render() {
    return (
      <div>
        <div className="workout-label-div">
          <label>Workout Name:</label>
          <input
            type="text"
          />
        </div>
        {this.props.exercise.map(exercise => {
          return <Exercise exercise={exercise} />
        })}
        <Exercise />
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  exercise: state.exercise
})

export const mapDispatchToProps = (dispatch) => ({
  addExercise: (exercise) => dispatch(addExercise(exercise)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Workout)