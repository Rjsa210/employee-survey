import React from 'react';

function ResultList(props) {
  return (
    <div className='container'>
    {props.results.map(result => (
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
  );
}

export default ResultList;
