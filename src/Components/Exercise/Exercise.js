import React, { Component } from 'react'
import { addExercise } from '../../actions/index'
import { connect } from 'react-redux'
import '../../index.css'

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
      muscleGroup: '',
      leftOption: 0,
      rightOption: 0
    }
  }

  handleMuscleGroup = (e) => {
    let muscleGroup = e.target.value
    this.setState({muscleGroup: muscleGroup})
  }

  handleLeftOptionUp = () => {
    this.setState({
      leftOption: this.state.leftOption + 5
    })
  }

  handleLeftOptionDown = () => {
    this.setState({
      leftOption: this.state.leftOption - 5
    })
  }

  handleRightOptionUp = () => {
    this.setState({
      rightOption: this.state.rightOption + 5
    })
  }

  handleRightOptionDown = () => {
    this.setState({
      rightOption: this.state.rightOption - 5
    })
  }

  render() {
    return (
      <div className="exercise-div">
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
        <select>
          <option>Weight/Reps</option>
          <option>Weight/Distance</option>
          <option>Weight/Time</option>
          <option>Reps/Distance</option>
          <option>Reps/Time</option>
          <option>Distance/Time</option>
          <option>Weight</option>
          <option>Reps</option>
          <option>Distance</option>
          <option>Time</option>
        </select>
        <div className="options-div">
          <div className="left-option-div option-div">
            <button onClick={this.handleLeftOptionUp}>+</button>
            <p className="left-option" contentEditable="true">{this.state.leftOption}</p>
            <button onClick={this.handleLeftOptionDown}>-</button>
          </div>
          <div className="right-option-div option-div">
            <button onClick={this.handleRightOptionUp}>+</button>
            <p className="right-option" contentEditable="true">{this.state.rightOption}</p>
            <button onClick={this.handleRightOptionDown}>-</button>
          </div>
        </div>
        <button className="add-ex-btn" onClick={() => this.props.addExercise('hello')}>Add Another Exercise</button>
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