import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./styles.css"

const Button = ({ title, variable, variableSetter }) => {
  return (
    <button
      onClick={() => {
        variableSetter(variable + 1)
      }}
    >
      {title}
    </button>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>GIVE FEEDBACK</h1>
      <Button title={"Good"} variable={good} variableSetter={setGood} />
      <Button
        title={"Neutral"}
        variable={neutral}
        variableSetter={setNeutral}
      />
      <Button title={"Bad"} variable={bad} variableSetter={setBad} />
      <h4>STATISTICS</h4>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <h4>MORE STATISTICS</h4>
      <p>All: {good + neutral + bad}</p>
      <p>Average: {(good - bad) / (good + neutral + bad)}</p>
      <p>Positive: {(good * 100) / (good + neutral + bad)}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
