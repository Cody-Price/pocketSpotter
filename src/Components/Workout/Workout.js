import React, { Component } from 'react'
import Exercise from '../Exercise/Exercise'
import { connect } from 'react-redux'
import { addExercise } from '../../actions/index'
import '../../index.css'

class Workout extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
        />
        <label>Workout Name</label>
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