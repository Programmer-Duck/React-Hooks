import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  function incrementHandler() {
    setCount((prevState) => prevState + 1);
  }

  function decrementHandler() {
    setCount((prevstate) => prevstate - 1);
  }

  const toggleHandler = () => {
    setDarkTheme((prevState) => !prevState);
  };

  return (
    <>
      <div
        style={{ backgroundColor: darkTheme ? "black" : "white" }}
        className="centered"
      >
        <button onClick={decrementHandler}>➖</button>
        <div>{count}</div>
        <button onClick={incrementHandler}>➕</button>
      </div>
      <div
        style={{ backgroundColor: darkTheme ? "black" : "white" }}
        className="centered"
      >
        <button onClick={toggleHandler}>Toggle😀</button>
      </div>
    </>
  );
}

export default App;
