import React, { Component } from 'react'
import { addExercise } from '../../actions/index'
import { connect } from 'react-redux'

class Exercise extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.addExercise('hello')}>Add Exercise</button>
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