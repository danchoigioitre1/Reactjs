import { useState } from "react"
const courses = [
  {
    id: 1,
    name: 'HTML,CSS'
  },
  {
    id: 2,
    name: 'JS'
  },
  {
    id: 3,
    name: 'REACT'
  }
]
// RADIO
// function App() {

//   const [checked, setChecked] = useState(1)

//   const handleSubmit = () => {
//     console.log( {id:checked})
//   }
//   return (

//     <div className="App">
//       {courses.map(course => (
//         <div key={course.id}>
//           <input
//             onChange={() => setChecked(course.id)}
//             checked={checked === course.id}
//             type='radio' />
//           {course.name}

//         </div>
//       ))
//       }

//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }


// Checkbox


function Check() {

  const [checked, setChecked] = useState([])



  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)

      if (isChecked) {
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id].sort()
      }
    })
  }
  return (

    <div className="App">
      {courses.map(course => (
        <div key={course.id}>
          <input
            onChange={() => handleCheck(course.id)}
            checked={checked.includes(course.id)}
            type='checkbox' />
          {course.name}

        </div>
      ))
      }

      
    </div>
  )
}

export default Check;
