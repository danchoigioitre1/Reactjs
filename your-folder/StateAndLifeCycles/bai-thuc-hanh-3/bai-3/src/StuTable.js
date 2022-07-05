import React from 'react'
import './App.css'





let studentList = [
    {
        id: 1,
        name: "stu1",
        phone: "0123456789",
        email: "123@gmail.com"
    },
    {
        id: 2,
        name: "stu2",
        phone: "01235335489",
        email: "121233@gmail.com"
    },
    {
        id: 3,
        name: "stu3",
        phone: "01297899999",
        email: "1211113@gmail.com"
    }
];

class StudentTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            studentList: studentList,
            name: '',
            phone: '',
            email: ''

        }


    }

    handleStudName = (e) => {
        this.setState({

            name: e.target.value

        })

    }

    handleStuPhone = (e) => {
        this.setState({

            phone: e.target.value

        })

    }

    handleStuEmail = (e) => {
        this.setState({

            email: e.target.value

        })

    }

    addStudent(stu, list) {
        let newList = list.push(stu)
        return newList
    }
    ///////////////////  Add

    handleAdd = () => {
        let name = this.state['name']
        let phone = this.state['phone']
        let email = this.state['email']
        let info = {
            id: Math.floor(Math.random() * 100),
            name: name,
            phone: phone,
            email: email
        }
        if (name !== '' && phone !== '' && email !== '') {
            this.addStudent(info, studentList)
            this.setState({
                studentList: studentList,
                name: '',
                phone: '',
                email: ''
            })

            document.getElementById('student-name').value = ''
            document.getElementById('student-phone').value = ''
            document.getElementById('student-email').value = ''
        } else { alert('thieu thong tin hoc sinh') }


    }

    ////////////////////////////////////////////

    ////////////////////////// Delete 


    findIndexStu(id) {
        for (let i = 0; i < studentList.length; i++) {
            if (studentList[i].id === id) {
                return i;
            }
        }

    }

    handleDelete = (id) => {
        studentList.splice(studentList.indexOf(studentList[this.findIndexStu(id)]), 1)
        this.setState({
            studentList: studentList
        })
    }


    //////////////////////////////////


    //////////////////////////////////   Edit 


    handleEdit = (id) => {
        document.getElementById('student-name').value = studentList[this.findIndexStu(id)].name
        document.getElementById('student-phone').value = studentList[this.findIndexStu(id)].phone
        document.getElementById('student-email').value = studentList[this.findIndexStu(id)].email
        this.setState({
            name: document.getElementById('student-name').value,
            phone: document.getElementById('student-phone').value,
            email: document.getElementById('student-email').value
        })


    }

    handleSave = (id) => {
        studentList[this.findIndexStu(id)].name = document.getElementById('student-name').value
        studentList[this.findIndexStu(id)].phone = document.getElementById('student-phone').value
        studentList[this.findIndexStu(id)].email = document.getElementById('student-email').value

        this.setState({
            studentList: studentList,
            name: '',
            phone: '',
            email: ''
        })

        document.getElementById('student-name').value = ''
        document.getElementById('student-phone').value = ''
        document.getElementById('student-email').value = ''
    }



    ////////////////////////////////////////





    render() {
        return (
            <div id="wapper">
                <h1>Student List</h1>
                <div id="student-input">
                    <form id="student-input">
                        <label htmlFor="student-name">Name</label>:
                        <input
                            className='inputStudent'
                            onChange={this.handleStudName}
                            id="student-name"
                            placeholder="name"
                        ></input>
                        <br></br>
                        <label htmlFor="student-phone">Phone</label>:
                        <input
                            className='inputStudent'
                            onChange={this.handleStuPhone}
                            id="student-phone"
                            placeholder="phone-number"
                        ></input>
                        <br></br>
                        <label htmlFor="student-email">Email</label>:
                        <input
                            className='inputStudent'
                            onChange={this.handleStuEmail}
                            id="student-email"
                            placeholder="email"
                        ></input>
                    </form>
                </div>
                <button onClick={this.handleAdd}>Add</button>





                {/* <div id='edit-row'></div> */}

                <table id='Student-table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.studentList.map(
                            (student, index) => (<tr key={index}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.phone}</td>
                                <td>{student.email}</td>
                                <td>
                                    <button onClick={e => this.handleEdit(student.id)}>Edit</button>
                                    <button onClick={e => this.handleSave(student.id)}>Save</button>
                                    <button onClick={e => this.handleDelete(student.id)}>Delete</button>
                                </td>
                            </tr>)
                        )
                        }

                    </tbody>
                </table>
            </div>
        );
    }
}



export default StudentTable