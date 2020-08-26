import React from 'react';
import logo from './logo.svg';
import './App.css';
 import axios from 'axios';

function App() {
  return (
    <div class="container">
      <button type="" className="btn btn-primary">Sign In</button>

      <form >
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

function login(e) {
  e.preventDefault();
  let request = {
    email: document.getElementById('exampleInputEmail1').value,
    password: document.getElementById('exampleInputPassword1').value
  }
  axios.post('https://localhost:3000/login', request)
  .then( resp => {
    alert(resp.data.message);
  })
  .catch(err => {
    console.log(err);
  })
}

export default App;
