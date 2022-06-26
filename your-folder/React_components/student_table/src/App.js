
import React from 'react';
import './App.css';
const StudentInfo = [{
  id: 1,
  name: 'nam',
  age: 30,
  adress: 'ha noi'
},
{
  id: 2,
  name: 'tuan',
  age: 32,
  adress: 'ha noi'
},
{
  id: 3,
  name: 'minh',
  age: 24,
  adress: 'ha noi'
}, {
  id: 4,
  name: 'quan',
  age: 20,
  adress: 'ha noi'
}
]

function StudentInfoComponent() {
  return (
    <React.Fragment>
      {StudentInfo.map(student => (
        <tr>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.age}</td>
          <td>{student.adress}</td>
        </tr>
      )
      )}
    </React.Fragment>
  )
}

function App() {
  return (
    <div className="App">
      <table id="table_student">
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>adress</th>
        </tr>
        <StudentInfoComponent />
      </table>
    </div>
  );
}

export default App;
