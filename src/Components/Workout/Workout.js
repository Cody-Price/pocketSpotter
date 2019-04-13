import React, { Component } from 'react'
import Exercise from '../Exercise/Exercise'
import { connect } from 'react-redux'
import { addExercise } from '../../actions/index'
import '../../index.css'

class Workout extends Component {
  constructor() {
    super()
    this.state = {
      workoutName: '',
      workoutData: {}
    }
  }

  handleWorkoutNameChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  saveWorkout = (data) => {
    this.setState({
      workoutData: data
    })
  }

  render() {
    return (
      <div>
        <div className="workout-label-div">
          <label>Workout Name:</label>
          <input
            type="text"
            name="workout_name"
            value={this.state.workoutName}
            onChange={this.handleWorkoutNameChange}
          />
        </div>
        {this.props.exercise.map(exercise => {
          return <Exercise 
            exercise={exercise}
          />
        })}
        <Exercise />
        <button className="save-workout-btn" onClick={this.saveWorkout}>Save Workout</button>
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