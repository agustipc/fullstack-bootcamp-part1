import "./styles.css"
import { useEffect, useState } from "react"
import { Note } from "./Note.js"

export default function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          setNotes(json)
        })
    }, 2000)
  }, [])

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSave = (event) => {
    event.preventDefault()

    if (newNote !== "") {
      const noteForNewState = {
        id: notes.length + 1,
        title: newNote,
        body: newNote,
      }

      setNotes([...notes, noteForNewState])
      setNewNote("")
    }
  }

  if (typeof notes === "undefined" || notes.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "200px" }}>
        No hay notas
      </div>
    )
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
