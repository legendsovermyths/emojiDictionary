import React from "react";
import Card from "./Card.jsx"
import emojipedia from "./emojipedia"
function createCard(emojipedia){
  return <Card
  emoji={emojipedia.emoji}
  name={emojipedia.name}
  meaning={emojipedia.meaning}
  />
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
