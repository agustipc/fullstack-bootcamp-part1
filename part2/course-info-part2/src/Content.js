const Part = ({ contentPart }) => {
  return (
    <p>
      {contentPart.name} {contentPart.exercises}
    </p>
  )
}

export const Content = ({ content }) => {
  return content.map((contentPart) => {
    return <Part key={contentPart.id} contentPart={contentPart} />
  })
}
