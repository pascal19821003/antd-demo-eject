import axios from 'axios';
// const axios  = require('axios');

class Users {
  static all() {
    console.log( "----Users call-----" );
    return axios.get('/users.json').then(resp => resp.data);
  }
}

export default Users;