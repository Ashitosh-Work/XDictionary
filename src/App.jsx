import { useReducer, useRef, useState } from 'react'
import './App.css'

function App() {

  const dictionary = useRef([{ word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }]);

  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const clickhandler = () => {
    let toCheck = word.toLowerCase();
    let checkedWord = dictionary.current.filter(ele => ele.word.toLowerCase() === toCheck);
    if (checkedWord.length) {
      setMeaning(checkedWord[0].meaning);
      return;
    }
    setMeaning("Word not found in the dictionary. ");
    return;
  }

  return (
    <>
      <h1>Dictionary App</h1>
      <input type='text' value={word} onChange={(e) => setWord((e.target.value))} required placeholder='Search for a word...' />
      <button onClick={clickhandler}>Search</button>
      <h4>Definition:</h4>
      <p>{meaning}</p>
    </>
  )
}

export default App
