import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({course}) => <h1>{course}</h1>

const Part = ({part, exercises}) => <p> {part} {exercises} </p>

const Content = ({parts}) => {

  return (
    <div>
      {
        parts.map(part => <Part part={part.name} exercises={part.exercises}/>)
      }
    </div>
  )
}
const Total = ({text, exercises1, exercises2, exercises3}) => <p>{text} {exercises1 + exercises2 + exercises3}</p>


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total text={'Number of exercises'} exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))