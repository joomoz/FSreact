import React from 'react'

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <div>
        <iframe title="Flag" src={country.flag}>
          Flag
        </iframe>
      </div>
    </div>
    
  )
}

export default Country