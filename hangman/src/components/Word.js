import React from 'react'

//mapping through each letter in the selected word
//checking to see if correctLetters array includes the letter
//if it does, display letter in span, else a blank

function Word({ selectedWord, correctLetters }) {
  return (
    <div className="word">
    {selectedWord.split('').map((letter, i) => {
      return (
          <span className="letter" key={i}>
          {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Word