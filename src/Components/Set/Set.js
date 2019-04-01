import React from 'react'

const Set = ({set}) => {

  return (
    <div className="set">
      {/* <p className="set-group subset">{set.muscleGroup}</p>
      <p className="set-name subset">{set.exerciseName}</p> */}
      <p className="set-left subset">{set.leftOption}</p>
      <p className="set-right subset">{set.rightOption}</p>
    </div>
  )
}

export default Set