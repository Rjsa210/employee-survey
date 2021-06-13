import axios from 'axios';

//api calls to get employee data
export default {
  returnAll: function() {
    return axios.get('https://randomuser.me/api/?nat=us&results=50')
  }
}