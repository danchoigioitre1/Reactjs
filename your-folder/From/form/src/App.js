import './App.css';
import { useState } from 'react';
function App() {
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    description: "The content of a textarea goes in the value attribute"
  })

  const [error, setError] = useState()
  const [previewImage, setPreviewImage] = useState("")
  
  
  const handleOnchange = e => {
    // console.log(`${e.target.name}: ${e.target.value}`)



    /// set validation khi User nhap
    // if (e.target.name === "name") {
    //   if (e.target.value.length > 10) {
    //     setError('the length of name cannot longer than 10')
    //     return
    //   }
    // }
   
   
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  const handleOnUpload = e => {
    // console.log(URL.createObjectURL(e.target.files[0]));
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  }

  const handleOnSubmit = (e) => {
    

    console.log('username', formState);

    ///set validation khi user submit
    if (formState.name.length > 10) {

      e.preventDefault();
      setError('the length of name cannot longer than 10')

      return
    }

  }

  const renderHeader = () => {
    if (formState.name) {
      return <h1>Hello {formState.name}</h1>;
    }
    return null;
  }

  const renderValidationName = () => {
    if (error) {
      return <p style={{ color: 'red' }}>{error}</p>
    }
    return null;
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        {renderHeader()}
        <p>Enter your name</p>
        {renderValidationName}
        <input type="text" name="name" value={formState.name} onChange={handleOnchange} />
        <p>Enter your age</p>
        <input type="text" name="age" value={formState.age} onChange={handleOnchange} />
        <p>Description</p>
        <div>
          <textarea name='description' value={formState.description} onChange={handleOnchange} />
        </div>
        
        <p>Image upload</p>
        <input type="file" name="upload" onChange={handleOnUpload} />
        <div>
          <img src={previewImage} alt="" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
export default App;
