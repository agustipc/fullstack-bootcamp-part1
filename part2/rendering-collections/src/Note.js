export const Note = ({ title, body }) => {
  return (
    <div style={{ padding: "20px" }}>
      <p>
        <small>{title}</small>
      </p>
      <p>{body}</p>
    </div>
  )
}
