
import React from 'react';


function ResultsOver50(props) {
  const array = props.results;
  // const byAge = array.sort(function(a, b) {
  //   return a.dob.age - b.dob.age;
  // });
  const over50 = array.filter(employee => employee.dob.age > 55)
  return(
    <div className='container'>
      {over50.map(result => (
        <div className='row'>
        <div className='col align-self-center'>
          <img src={result.picture.medium} alt={result.name.first + ' ' + result.name.last}/> 
        </div>
        <div className='col-8'>
        <p><strong>{result.name.first} {result.name.last}</strong></p>
        <ul>
          <li>Email: <a href={result.email}>{result.email}</a></li>
          <li>Username: {result.login.username}</li>
          <li>Age: {result.dob.age}</li>
  
        </ul>
        </div>
      </div>
      ))}

    </div>

  )
}

export default ResultsOver50;