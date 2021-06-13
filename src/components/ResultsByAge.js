
import React from 'react';


function ResultsByAge(props) {
  const array = props.results;
  const byAge = array.sort(function(a, b) {
    return a.dob.age - b.dob.age;
  });
  return(
    <div className='container'>
      {byAge.map(result => (
        <div className='row'>
        <div className='col align-self-center'>
          <img src={result.picture.medium}/> 
        </div>
        <div className='col-8'>
        <p><strong>{result.name.first} {result.name.last}</strong></p>
        <ul>
          <li>Email: <a>{result.email}</a></li>
          <li>Username: {result.login.username}</li>
          <li>Age: {result.dob.age}</li>
  
        </ul>
        </div>
      </div>
      ))}

    </div>

  )
}

export default ResultsByAge;