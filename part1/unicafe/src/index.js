import React, { useState } from "react"
import { createRoot } from "react-dom/client"
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

const TableRow = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  return (
    <table>
      <tbody>
        <TableRow text={"Good"} value={good} />
        <TableRow text={"Neutral: "} value={neutral} />
        <TableRow text={"Bad: "} value={bad} />
        <TableRow text={"All: "} value={total} />
        <TableRow text={"Average: "} value={(good - bad) / total} />
        <TableRow text={"Positive: "} value={(good * 100) / total} />
      </tbody>
    </table>
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

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App tab="home" />)
