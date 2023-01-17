import ReactDOM from "react-dom"
import { useState } from "react"

const rootElement = document.getElementById("root")

const Counter = ({ number }) => {
  return <h2>{number}</h2>
}

const App = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = (isIncrement) => {
    if (isIncrement) {
      setCounter(counter + 1)
    } else {
      setCounter(counter - 1)
    }
  }

  const handleClickReset = () => {
    setCounter(0)
  }

  const isEven = counter % 2 === 0

  return (
    <div>
      <h1>React Magic</h1>
      <p>The value of the counter is:</p>
      <Counter number={counter} />
      <p>{isEven ? "It's even" : "It's not even"}</p>
      <button
        onClick={() => handleClick(true)}
        /* onClick={() => {
          // setCounter(counter + 1);
          setCounter((prevCounter) => {
            return prevCounter + 1;
          });
        }} */
      >
        Increment
      </button>
      <button onClick={() => handleClick(false)}>Decrement</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  )
}

ReactDOM.render(<App />, rootElement)
