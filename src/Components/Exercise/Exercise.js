import React, { Component } from 'react'
import { addExercise } from '../../actions/index'
import ContentEditable from 'react-contenteditable'
import { connect } from 'react-redux'
import '../../index.css'
import Set from '../Set/Set'

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
    this.contentEditable = React.createRef()
    this.state = {
      muscleGroup: '',
      exerciseName: '',
      leftOption: 0,
      rightOption: 0,
      sets: [],
      htmlLeftOption: '<p className="left-option">0</p>',
      htmlRightOption: '<p className="right-option">0</p>',
      optionsLable: ''
    }
  }

  handleMuscleGroup = (e) => {
    let muscleGroup = e.target.value
    this.setState({muscleGroup: muscleGroup})
  }

  handleExercise = (e) => {
    let exercise = e.target.value
    this.setState({exerciseName: exercise})
  }

  handleLeftOptionUp = () => {
    let leftOption = this.state.leftOption + 5
    this.setState({
      leftOption,
      htmlLeftOption: `<p className="left-option">${leftOption}</p>`
    })
  }

  handleLeftOptionDown = () => {
    let leftOption = this.state.leftOption - 5
    this.setState({
      leftOption,
      htmlLeftOption: `<p className="left-option">${leftOption}</p>`
    })
  }

  handleRightOptionUp = () => {
    let rightOption = this.state.rightOption + 1
    this.setState({
      rightOption,
      htmlRightOption: `<p className="right-option">${rightOption}</p>`
    })
  }

  handleRightOptionDown = () => {
    let rightOption = this.state.rightOption - 1
    this.setState({
      rightOption,
      htmlRightOption: `<p className="right-option">${rightOption}</p>`
    })
  }

  handleLeftEdit = (e) => {
    console.log('left:', e.target.value)
    this.setState({
      leftOption: e.target.value.innerText,
      htmlLeftOption: `<p>${this.state.leftOption}</p>`
    })
  }

  handleRightEdit = (e) => {
    console.log('right:', e.target.value)
    this.setState({
      rightOption: e.target.value.innerText,
      htmlRightOption: `<p>${this.state.rightOption}</p>`
    })
  }

  addSet = () => {
    const newSet = {
      muscleGroup: this.state.muscleGroup,
      exerciseName: this.state.exerciseName,
      leftOption: this.state.leftOption,
      rightOption: this.state.rightOption
    }
    this.setState({
      sets: [...this.state.sets, newSet]
    })
  }

  handleOptionsSelect = (e) => {
    this.setState({
      optionsLable: e.target.value
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
        <select onChange={(e) => this.handleExercise(e)}>
          {
            workoutExercises[this.state.muscleGroup].map(exercise => {
              return <option key={exercise}>{exercise}</option>
            })
          }
        </select>
        <select onChange={this.handleOptionsSelect}>
          <option>Select Option</option>
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
        <div>
          <p>{this.state.muscleGroup}</p>
          <p>{this.state.exerciseName}</p>
          <p className="options-lable">{this.state.optionsLable}</p>
          {
            this.state.sets.map(set => {
              return <Set set={set} />
            })
          }
        </div>
        <div className="options-div">
          <div className="left-option-div option-div">
            <button onClick={this.handleLeftOptionUp}>+</button>
            <ContentEditable 
              className="left-option" 
              innerRef={this.contentEditable}
              html={this.state.htmlLeftOption}
              disabled={false}
              onChange={this.handleLeftEdit}
            />
            <button onClick={this.handleLeftOptionDown}>-</button>
          </div>
          <div className="right-option-div option-div">
            <button onClick={this.handleRightOptionUp}>+</button>
            <ContentEditable 
              className="right-option" 
              innerRef={this.contentEditable}
              html={this.state.htmlRightOption}
              disabled={false}
              onChange={this.handleRightEdit}
            />
            <button onClick={this.handleRightOptionDown}>-</button>
          </div>
          <button onClick={this.addSet}>Add Set</button>
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