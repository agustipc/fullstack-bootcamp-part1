import "./styles.css"
import { useState } from "react"
import { Note } from "./Note.js"

export default function App(props) {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("")

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
        important: true,
      }

      setNotes([...notes, noteForNewState])
      setNewNote("")
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>NOTES</h1>
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}

      <form style={{ paddingTop: "40px" }} onSubmit={handleSave}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear nota</button>
      </form>
    </div>
  )
}
