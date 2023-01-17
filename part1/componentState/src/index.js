import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  const handleClickReset = () => {
    setCounter(0);
  };
  return (
    <div>
      <h1>React Magic</h1>
      <p>The value of the counter is:</p>
      <h2>{counter}</h2>
      <button
        onClick={handleClick}
        /* onClick={() => {
          // setCounter(counter + 1);
          setCounter((prevCounter) => {
            return prevCounter + 1;
          });
        }} */
      >
        Increment
      </button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
