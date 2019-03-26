import React, { Component } from 'react'
import { addExercise } from '../../actions/index'
import { connect } from 'react-redux'

const workoutExercises = {
  '': ['Select Exercise'],
  'Legs': ['Squats', 'Quad Extensions', 'Hamstring Curls', 'Calf Raises'],
  'Chest': ['Bench Press', 'Dumbell Bench Press', 'Hammerstring Pulldowns', 'Flys'],
  'Back': ['Rows', 'Pull Ups', 'Back Extensions'],
  'Shoulders': ['Deltoid Flys', 'Front Deltoid Raises', 'Rear Deltoid Raises', 'Shrugs'],
  'Abs': ['Crunches', 'Oblique Crunches', 'Leg Raises', 'Bicycles'],
  'Cardio': ['Treadmill Running', 'Outdoor Running', 'Elyptical', 'Stationary Bike', 'Rowing']
}

class Exercise extends Component {
  constructor() {
    super()
    this.state = {
      muscleGroup: ''
    }
  }

  handleMuscleGroup = (e) => {
    let muscleGroup = e.target.value
    this.setState({muscleGroup: muscleGroup})
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.addExercise('hello')}>Add Exercise</button>
        <select onChange={(e) => this.handleMuscleGroup(e)}>
          <option>Select Muscle Group</option>
          <option>Legs</option>
          <option>Chest</option>
          <option>Back</option>
          <option>Shoulders</option>
          <option>Abs</option>
          <option>Cardio</option>
        </select>
        <select>
          {
            workoutExercises[this.state.muscleGroup].map(exercise => {
              return <option key={exercise}>{exercise}</option>
            })
          }
        </select>
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

export default connect(mapStateToProps, mapDispatchToProps)(Exercise)