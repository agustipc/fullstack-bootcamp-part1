import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"

const Anecdote = ({ anecdote, votes }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(6))

  const handleClick = () => {
    var newSelected = Math.floor(Math.random() * anecdotes.length)
    setSelected(newSelected)
  }
  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1

    setPoints(copy)
  }

  var mostPointed = points.indexOf(Math.max(...points))

  return (
    <div style={{ padding: "40px" }}>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={props.anecdotes[selected]} votes={points[selected]} />
      <Button onClick={handleVote} text={"Vote"} />
      <Button onClick={handleClick} text={"Random anecdote"} />

      <h2>Anecdote with more votes</h2>
      <Anecdote
        anecdote={props.anecdotes[mostPointed]}
        votes={points[mostPointed]}
      />
    </div>
  )
}

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
]

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App anecdotes={anecdotes} />)
