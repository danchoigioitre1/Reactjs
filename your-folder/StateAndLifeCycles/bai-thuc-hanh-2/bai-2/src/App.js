
import './App.css';
import React from 'react'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      item: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value
    }
    )
  }

  addItem(item, list) {
    if (!list.includes(item)) {
      list.push(item)

    }
    return list
  }

  handleAddItem = () => {
    console.log(this.state.item)
    let newList = this.addItem(this.state.item, this.state.list)
    this.setState({
      list: newList,
      item : ''
    })
    document.getElementById('input-item').value = ""

  }

  render() {
    return (
      <div>
        <h1>To do list</h1>
        <input id="input-item" type='text' onChange={this.handleChange} />
        <button onClick={this.handleAddItem}> Add </button>
        <br></br>

        {this.state.list.map(
          (item, index) => (<p key={index} ><input type="checkbox" /> {item}</p>)
        )}
      </div>
    )


  }




}




export default App;
