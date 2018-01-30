import React, { Component } from 'react';
import Country from './components/Country'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      findCountry: ""
    }
  }

  componentWillMount() {
    console.log("will mount")

    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({ countries: response.data })
      })
  }

  handleFindCountryChange = (event) => {
    console.log(event.target.value)
    this.setState({ findCountry: event.target.value })
  } 
  
  render() {
    let filteredCountries = this.state.countries
      .filter(country => 
        country.name.toUpperCase().includes(this.state.findCountry.toUpperCase()))
    
    return (
      <div>
        <h1>Countries</h1>
        <form>
          Find countries: <input value={this.state.findCountry} onChange={this.handleFindCountryChange}/>
        </form>
        <div>
          <CountriesToBeShown countries={filteredCountries} />       
        </div>
      </div>
    );
  }
}

const CountriesToBeShown = ({countries}) => {
  if(countries.length > 10) {
    return (
      <div>Too many matches, be more specific!</div>
    )
  } else if(countries.length <= 10 && countries.length > 1) {
    return (
      <ul>
        {countries.map(country => 
          <li key={country.numericCode}>
            {country.name} 
          </li>            
        )}
      </ul>
    )
  } else if(countries.length === 1) {
    return (
      <div>
        <Country 
          country={countries[0]} 
        /> 
      </div>
    )
  } 

  return (
    <div>No matches!</div>
  )
  
} 

export default App;
