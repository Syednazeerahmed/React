import { useState } from "react";

export default function Class4() {
  const [number, setNumber] = useState(0);

  // below is the examples of useState hook
  const increment = () => {
    setNumber(number + 1);
  };
  const decrement = () => setNumber(number - 1);
  // const zero = () => setNumber(0);

  const [text, setText] = useState("");
  const displayText = (e) => setText(e.target.value);

  const [col, setCol] = useState("green");
  const changeColor = () => {
    col === "green" ? setCol("red") : setCol("green");
  };

  const [showText,setShowText] = useState('true');
  return (
    <div className="App">
      <h1>CLASS 4</h1>
      <h1>{number}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      {/* <button onClick={zero}>Set zero</button> */}
      <button onClick={() => setNumber(0)}>Set zero</button>
      <br />
      <br />

      <input type="text" placeholder="Enter any thing" onChange={displayText} />
      <h2>{text}</h2>

      <button onClick={changeColor}>Change color</button>
      <h1 style={{ color: col }}>Hello!! World</h1>

      <button onClick={ () => setShowText(!showText)}>show/hide</button>
      { showText && <h1>How are you</h1>}
    </div>
  );
}
