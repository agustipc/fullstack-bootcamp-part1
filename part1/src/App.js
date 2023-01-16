import './App.css';

const Mensaje = (props) => {

  const a = 2
  const b = 3
  return (
    <div>
        <p>{props.message}</p>
        {a+b}
      </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Titulo de la App</h1>
      <strong>Calcular 2 + 3</strong>
      <Mensaje message='El resultado es:' />
    </div>
  );
}

export default App;
