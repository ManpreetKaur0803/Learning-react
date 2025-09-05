import { useState } from "react";
import "./App.css";

function App() {
  //***********This is an Hooks example project */
  let [counter, setCounter] = useState(5); //5 is default value of counter

  let addValue = () => {
    // setCounter(counter + 1);

    if (counter < 20) {
      // counter = counter + 1;
      setCounter(counter + 1);
    }
  };
  let reduceValue = () => {
    // setCounter(counter - 1);

    if (counter > 0) {
      // counter = counter - 1;
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Chai and Counter Project</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Count Up</button>
      <button onClick={reduceValue}>Count down</button>
      <br />
      <br />
      <br />
      <footer>So count is {counter}</footer>
    </>
  );
}

export default App;
