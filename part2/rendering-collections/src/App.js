import "./styles.css"
import { useEffect, useState } from "react"
import { Note } from "./Note.js"
import { create as createNote, getAll as getAllNotes } from "./services/notes"

export default function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      getAllNotes().then((response) => {
        setNotes(response)
        setLoading(false)
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
        title: newNote,
        body: newNote,
        userId: 1,
      }

      setError("")

      createNote(noteForNewState)
        .then((response) => {
          setNotes([...notes, response])
        })
        .catch((e) => {
          console.error(e)
          setError("La api ha petado")
        })

      // setNotes([...notes, noteForNewState])
      setNewNote("")
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>NOTES</h1>
      {loading ? (
        <small>Loading...</small>
      ) : error ? (
        <span style={{ color: "red" }}>{error}</span>
      ) : typeof notes === "undefined" || notes.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "200px" }}>
          No hay notas
        </div>
      ) : (
        notes.map((note) => <Note key={note.id} {...note} />)
      )}

      <form style={{ paddingTop: "40px" }} onSubmit={handleSave}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear nota</button>
      </form>
    </div>
  )
}
