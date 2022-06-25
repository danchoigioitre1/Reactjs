import './style.css'
import './App.css';
import { Input1, Input2 } from './input';
import React from 'react';

function Button({ onClick }) {
  return (
    <div id="calculator">
      <button onClick={onClick}> + </button>
    </div>
  )
}

function App() {

  function handle() {


  }
  return (
    <div className="wrapper">
      <Input1 />
      <Input2 />
      <Button
        onClick={handle} />

      <div> Result: <span id='result'></span>  </div>
    </div>
  );
}

// function add() {
//   let x = +document.getElementById("firstNumber").value
//   let y = +document.getElementById("secondNumber").value
//   return x + y
// }
export default App;
