import { useState, useEffect } from "react";

function App() {
  const [coures, setCoures] = useState("Java");
  const [value,setValue]= useState('')

  const choice = (e) => {
    setCoures(e);
  };

  useEffect(() => {
    switch (coures) {
      case "Java":
        setValue("Java");
        break;
      case "Php":
        setValue("Php");
        break;
      case "C/C++":
        setValue("C/C++");
        break;
      case "JS":
        setValue("JS");
        break;
        default:
    }
  }, [coures]);
  console.log(value)

  return (
    <div>
      <h1>Course: {value}</h1>
      <select onChange={(e) => choice(e.target.value)}>
        <option value="Java">Java</option>
        <option value="Php">Php</option>
        <option value="C/C++">C/C++</option>
        <option value="JS">JS</option>
      </select>
    </div>
  );
}

export default App;
