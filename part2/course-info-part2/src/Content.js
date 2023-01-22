import { useState } from "react"

const Part = ({ contentPart }) => {
  return (
    <p>
      {contentPart.name} {contentPart.exercises}
    </p>
  )
}

export const Content = ({ content }) => {
  const [exercisesCounter, setExercisesCounter] = useState(0)

  async function handleCountExercises() {
    let newContentPart = 0
    await content.map((contentPart) => {
      newContentPart = newContentPart + contentPart.exercises
    })
    setExercisesCounter(newContentPart)
  }

  handleCountExercises()

  return (
    <div>
      {content.map((contentPart) => {
        return <Part key={contentPart.id} contentPart={contentPart} />
      })}

      <h4>Total of {exercisesCounter} exercises</h4>
    </div>
  )
}
