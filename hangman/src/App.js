import React, { useState, useEffect }from 'react'
import Header from "./components/Header"
import Figure from "./components/Figure"
import WrongLetters from "./components/WrongLetters"
import Word from "./components/Word"
import Popup from "./components/Popup"
import Notification from "./components/Notification"
import Restart from "./components/Restart"
import { showNotification as show } from "./helpers/helpers"
import './app.css'

const words = ['application', 'programming', 'interface', 'wizard', 'attractive', 'beautiful', 'charming', 'cute', 'elegant', 'ridiculous', 'graceful', 'handsome', 'lovely', 'neat', 'pleasant', 'little', 'microwave', 'dingo', 'rabbit', 'ibex', 'crikey', 'train', 'banana', 'dragonfruit','hospital', 'ambulance', 'elephant', 'extravagant', 'tuxedo', 'vivid', 'yacht', 'wombat', 'fantastic', 'lullaby', 'vacuum', 'dishwasher', 'bison', 'orangutan', 'doctor', 'mother', 'grandpa', 'extraordinary']
let selectedWord = words[Math.floor(Math.random() * words.length)]

function App() {
  const [playable, setPlayable] = useState(true)
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [showNotification, setShowNotification] = useState(false)

  //useEffect for side effects
  useEffect(() => {
      const handleKeyDown = event => {
      const { key, keyCode } = event;
      //if it's a letter key - 65 to 90 are letters on keyboard
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            //creates copy of currentLetters
            setCorrectLetters(currentLetters => [ ...currentLetters, letter]);
          } else {
            show(setShowNotification)
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [ ...wrongLetters, letter]);
          } else {
            show(setShowNotification)

          }
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    //cleans up the eventlistener so we only have one running at anytime
    return () => window.removeEventListener('keydown', handleKeyDown)
    //including array with dependencies
    //anytime dependencies are updated the eventListener is called
  },[correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true)

    //empty the arrays
    setCorrectLetters([])
    setWrongLetters([])

    //give us a new word
    const random = Math.floor(Math.random() * words.length)
    selectedWord = words[random]
  }

  const [buttonText, setButtonText] = useState('Help');

  function handleClick() {
    setButtonText('Hangman is a simple word guessing game. Players try to figure out an unknown word by guessing letters. If too many letters which do not appear in the word are guessed, the player is hanged (and loses).');
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
        <Restart playAgain={playAgain}/>
        <button onClick={handleClick} id="helpBtn">{buttonText}</button>
      </div>
        <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
        <Notification showNotification={showNotification}/>
    </>
  );
}

export default App;