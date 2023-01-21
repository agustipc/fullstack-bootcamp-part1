import { useState } from "react"
import ReactDOM from "react-dom"
import "./styles.css"

const App = () => {
  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
  })

  const handleClickLeft = () => {
    setCounters({ left: counters.left + 1, right: counters.right })
  }
  const handleClickRight = () => {
    setCounters({ left: counters.left, right: counters.right + 1 })
  }

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {counters.right}
    </div>
  )
}
const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
