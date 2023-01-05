// import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>
        Counter: <b>{count}</b>
      </h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button disabled={counter < -1} onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>
    </div>
  );
}
