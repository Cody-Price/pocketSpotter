import React from 'react'

const Set = ({set}) => {

  return (
    <div className="set">
      {set.muscleGroup} 
      {set.exerciseName} 
      {set.leftOption} 
      {set.rightOption} 
    </div>
  )
}

export default Set