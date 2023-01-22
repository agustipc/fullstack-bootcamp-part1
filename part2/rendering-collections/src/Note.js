export const Note = ({ date, content, categories = [] }) => {
  return (
    <div style={{ padding: "20px" }}>
      <p>
        <small>{date}</small>
      </p>
      <p>{content}</p>
      {categories.map((category) => (
        <small key={category}>{category}</small>
      ))}
    </div>
  )
}
