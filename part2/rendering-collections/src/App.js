import "./styles.css"
import { useEffect, useState } from "react"
import { Note } from "./Note.js"
import axios from "axios"

export default function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          setNotes(response.data)
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

      axios
        .post("https://jsonplaceholder.typicode.com/posts", noteForNewState)
        .then((response) => {
          const { data } = response
          setNotes([...notes, data])
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
