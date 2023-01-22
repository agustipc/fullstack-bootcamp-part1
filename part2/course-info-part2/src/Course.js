import { Header } from "./Header"
import { Content } from "./Content"

export const Course = ({ course }) => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <Header title={course.name} />
      <Content content={course.parts} />
    </div>
  )
}
