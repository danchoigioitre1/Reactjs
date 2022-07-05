import React from "react";


let studentList = [
    {
        name: 'stu1',
        phone: '0123456789',
        email: '123@gmail.com'
    },
    {
        name: 'stu2',
        phone: '01235335489',
        email: '121233@gmail.com'
    },
    {
        name: 'stu3',
        phone: '01297899999',
        email: '1211113@gmail.com'
    }
]

class FieldInput extends React.Component {
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

    handelAdd = () => {
        let name = this.state['name']
        let phone = this.state['phone']
        let email = this.state['email']
        let info = {
            name: name,
            phone: phone,
            email: email
        }
        this.addStudent(info, studentList)
       
        this.setState({
            studentList: studentList
        })
console.log(studentList)

    }



    render() {
        return (
            <div id="wapper">
                <h1>Student List</h1>
                <div id="student-input">
                    <form id="student-input">
                        <label htmlFor='student-name'>Name</label>:
                        <input onChange={this.handleStudName} id="student-name" placeholder="name"></input><br></br>

                        <label htmlFor='student-phone'>Phone</label>:
                        <input onChange={this.handleStuPhone} id="student-phone" placeholder="phone-number"></input><br></br>

                        <label htmlFor='student-email'>Email</label>:
                        <input onChange={this.handleStuEmail} id="student-email" placeholder="email"></input>

                    </form>

                </div>
                <button onClick={this.handelAdd}>Add</button>
            </div>
        )
    }


}


export default FieldInput
export {studentList} 