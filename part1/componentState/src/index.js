import { useState } from "react"
import ReactDOM from "react-dom"
import "./styles.css"

const WarningNotUsed = () => {
  return <h5>Todavia no se ha usado el contador</h5>
}

const ListOfClicks = ({ clicks }) => {
  return <p>{clicks.join(", ")}</p>
}

const App = () => {
  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    mensaje: "Mensaje en el estado",
  })

  const [clicks, setClicks] = useState([])

  const handleClickLeft = () => {
    const newCountersState = {
      ...counters,
      left: counters.left + 1,
    }
    setCounters(newCountersState)
    setClicks((prevClicks) => [...prevClicks, "L"])
  }
  const handleClickRight = () => {
    const newCountersState = {
      ...counters,
      right: counters.right + 1,
    }
    setCounters(newCountersState)
    setClicks((prevClicks) => [...prevClicks, "R"])
  }

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {counters.right}
      <p> Clicks totales: {clicks.length}</p>
      <p>{counters.mensaje}</p>
      {clicks.length === 0 ? (
        <WarningNotUsed />
      ) : (
        <ListOfClicks clicks={clicks} />
      )}
    </div>
  )
}
const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
