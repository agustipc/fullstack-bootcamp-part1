export const Note = ({ date, content }) => {
  return (
    <div style={{ padding: "20px" }}>
      <p>
        <small>{date}</small>
      </p>
      <p>{content}</p>
    </div>
  )
}
