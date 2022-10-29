import React from 'react'

const WrongLetters = ({wrongLetters}) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length >0 && <p>Wrong</p>}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          //reduce adds a comma between the spans
          //arrow function with one thing - it returns but we don't need to type it
          .reduce((prev, curr) => prev === null? [curr] : [prev, ', ', curr], null)}
      </div>
    </div>
  )
}

export default WrongLetters