import React from 'react';
import Person from './components/Person'
import personService from './services/persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: ''
    }
  }

  componentWillMount() {
    personService
      .getAll()
      .then(response => {
        this.setState({persons: response})
      })
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
      personService
      .create(nameObject)
      .then(newName => {
        this.setState({
          persons: this.state.persons.concat(nameObject),
          newName: '',
          newNumber: ''
        })
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
            <Person key={person.name} person={person} />
          )}
        </ul>
      </div>
    )
  }
}

export default App;
