import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

const App = () => {
  const [counter, setCounter] = useState(0);

  setInterval(() => {
    setCounter(counter + 1);
  }, 2000);

  return (
    <div>
      <h1>React Magic</h1>
      <p>The value of the counter is:</p>
      <h2>{counter}</h2>;
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
