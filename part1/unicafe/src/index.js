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

const Statistic = ({ text, value }) => {
  return <p>text{value}</p>
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  return (
    <div>
      <h4>STATISTICS</h4>
      <Statistic text={"Good: "} value={good} />
      <Statistic text={"Neutral: "} value={neutral} />
      <Statistic text={"Bad: "} value={bad} />
      <h4>MORE STATISTICS</h4>
      <Statistic text={"All: "} value={total} />
      <Statistic text={"Average: "} value={(good - bad) / total} />
      <Statistic text={"Positive: "} value={(good * 100) / total} />
    </div>
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
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
