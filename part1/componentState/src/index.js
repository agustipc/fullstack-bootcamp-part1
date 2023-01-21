import { useState } from "react"
import ReactDOM from "react-dom"
import "./styles.css"

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>left</button>
      <button onClick={() => setRight(right + 1)}>right</button>
      {right}
    </div>
  )
}
const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
