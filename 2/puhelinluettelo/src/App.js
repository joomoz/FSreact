import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          number: 123456 }
      ],
      newName: '',
      newNumber: ''
    }
  }

  addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    
    let found = false

    this.state.persons.forEach((person) => {
      if(person.name === this.state.newName) {
        alert("Nimi on jo puhelinluettelossa!")
        found = true
      }
    })

    if(!found) {
      const persons = this.state.persons.concat(nameObject)
      this.setState({
        persons,
        newName: '',
        newNumber: ''
      })
    }    

  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleNameChange}/>
          </div> 
          <div> 
            numero: <input value={this.state.newNumber} onChange={this.handleNumberChange}/>
          </div>
          <button type="submit">lisää</button>
        </form>
        <h2>Numerot</h2>
        <ul>
          {this.state.persons.map( person => 
            <li key={person.name}> 
              {person.name} {person.number}
            </li>)
          }
        </ul>
      </div>
    )
  }
}

export default App;
