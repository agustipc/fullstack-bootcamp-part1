import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

const App = (props) => {
  return <h1>{props.initialCounter}</h1>;
};

let counter = 0;

const refresh = () => {
  ReactDOM.render(<App initialCounter={counter} />, rootElement);
};

setInterval(() => {
  counter++;
  refresh();
}, 1000);
