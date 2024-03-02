import { useState } from "react";
import "./styles.css";

const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

export default function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleclick = () => {
    const result = dictionary.filter(
      (item) => item.word.toLocaleLowerCase() === word.toLocaleLowerCase()
    );
    // console.log(result);
    if (result.length > 0) {
      setMeaning(result[0].meaning);
    } else {
      setMeaning("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={handleclick}>Search</button>
      <p>eg. React, Component, State</p>
      <h3>Definition: </h3>
      {meaning && <p>{meaning}</p>}
    </div>
  );
}
