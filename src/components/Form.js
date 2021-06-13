import axios from 'axios';
import React from 'react';

function Form() {
  return (
    <div className='container'>
      <div className='row'>
        <form>
          <h1>Employee Directory</h1>
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Open this select menu</option>
            <option value="1">show all employees</option>
            <option value="2">sort by age</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default Form;