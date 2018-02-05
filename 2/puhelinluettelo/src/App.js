import React from 'react';
import Person from './components/Person'
import personService from './services/persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      error: null,
      info: null
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
        personService
          .getAll()
          .then(response => {
            this.setState({
              persons: response,
              newName: '',
              newNumber: '',
              info: `${this.state.newName} lisättiin puhelinluetteloon.`
            })
            setTimeout(() => {
              this.setState({info: null})
            }, 3000)
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

  handleDelete = (id) => {
    return () => {
      const person = this.state.persons.find(n => n.id === id)
      if(window.confirm(`Poistetaanko ${person.name}?`)) {
  
        personService
        .deleteId(id)
        .then(() => {
          const persons = this.state.persons.filter(n => n.id !== id)
          this.setState({
            persons: persons
          })
          this.setState({
            info: `${person.name} poistettiin puhelinluettelosta.`,
          })
          setTimeout(() => {
            this.setState({info: null})
          }, 3000)
        })
        .catch(error => {
          this.setState({
            info: `Henkilöä ei löydy palvelimelta`,
          })
          setTimeout(() => {
            this.setState({info: null})
          }, 3000)
        })    
      }
    }
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Notification message={this.state.info}/>
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
        <table>
          <tbody>
              {this.state.persons.map( person => 
                <Person 
                  key={person.name} 
                  person={person} 
                  handleDelete={this.handleDelete(person.id)}
                />
              )}
          </tbody>
        </table>
      </div>
    )
  }
}

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div className="error">
      {message}
    </div>
  )
}

export default App;
