
import React from 'react';

function alphebetize(a, b) {
  const empA = a.name.last.toUpperCase();
  const empB = b.name.last.toUpperCase();

  let comparison = 0;
  if (empA > empB) {
    comparison = 1;
  } else if (empA < empB) {
    comparison = -1
  }
  return comparison;
}

function ResultsByName(props) {
  const array = props.results;
  const byName = array.sort(alphebetize);
  return(
    <div className='container'>
      {byName.map(result => (
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

export default ResultsByName;