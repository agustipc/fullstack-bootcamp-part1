const express = require("express")
const app = express()

app.use(express.json())

let notes = [
  {
    id: 1,
    content: "Me tengo que suscribir en Youtube",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Tengo que estudiar las clases de fullstack",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "Repasar los retos de JS",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
]

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "application/json" })
//   response.end(JSON.stringify(notes))
// })

app.get("/", (request, response) => {
  response.send("<h1>Hello World</h1>")
})

app.get("/api/notes", (request, response) => {
  response.json(notes)
})

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find((note) => note.id === id)
  if (note) {
    response.json(note)
  }
  response.status(404).end()
})

app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter((note) => note.id !== id)
  response.status(204).end()
})

app.post("/api/notes", (request, response) => {
  const note = request.body

  const ids = notes.map((note) => note.id)
  const maxId = Math.max(...ids)

  const newNote = {
    id: maxId + 1,
    content: note.content,
    important: typeof note.important !== "undefined" ? note.important : false,
    date: new Date().toISOString(),
  }

  notes = [...notes, newNote]

  response.json(newNote)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
