import React from 'react'

const Kurssi = ({kurssi}) => {
  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osat={kurssi.osat}  />
      <Yhteensa osat={kurssi.osat} />  
    </div>
  )
}

const Otsikko = ({kurssi}) => {
  return (
    <div>
      <h1>{kurssi.nimi}</h1>
    </div>
  )
}

const Sisalto = ({osat}) => {
  return (
    <div>
      {osat.map(osa => <Osa key={osa.id} osa={osa}/>)}
    </div> 
  )
}

const Osa = ({osa}) => {
  return (
    <p>{osa.nimi} {osa.tehtavia}</p>
  )
}

const Yhteensa = ({osat}) => {
  //reduce!
  let total = osat.reduce((sum, osa) => {
    return sum + osa.tehtavia
  }, 0);

  return (
    <div>
      <p>yhteensä {total} tehtävää</p>
    </div>
  )
}

export default Kurssi