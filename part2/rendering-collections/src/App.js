import "./styles.css"
import { useState } from "react"
import { Note } from "./Note.js"

export default function App(props) {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)

  // if (typeof notes === "undefined" || notes.length === 0) {
  //   return "No hay notas"
  // }
  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSave = (event) => {
    event.preventDefault()

    if (newNote !== "") {
      const noteForNewState = {
        id: notes.length + 1,
        content: newNote,
        date: new Date().toISOString(),
        important: false,
      }

      setNotes([...notes, noteForNewState])
      setNewNote("")
    }
  }

  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>NOTES</h1>
      <button style={{ minWidth: "120px" }} onClick={handleShowAll}>
        {showAll ? "Show Important" : "Show All"}
      </button>
      {notes
        .filter((note) => {
          if (showAll === true) return true
          return note.important === true
        })
        .map((note) => (
          <Note key={note.id} {...note} />
        ))}

      <form style={{ paddingTop: "40px" }} onSubmit={handleSave}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear nota</button>
      </form>
    </div>
  )
}
