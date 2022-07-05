import React from 'react'
import './App.css'
import FieldInput from "./FieldInput.js"
import { studentList}  from "./FieldInput.js"

class StudentTable extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            studentList: studentList,
         
    }

}



render() {
    return (
        <div>
            <FieldInput />
   
            <table id='Student-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.studentList.map(
                        (student, index) => (<tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>
                                <button onClick={this.handleEdit}>Edit</button>
                                <button onClick={this.handleDelete}>Delete</button>
                            </td>
                        </tr>)
                    )
                    }
                    
                </tbody>
            </table>
        </div>

    )
}


}


export default StudentTable