import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './login.js'
import CCHome from './CCHome.js'
import Landing from './Landing.js'
import Signup from './Sign-up.js'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
 render() {
  return (
              <Switch>
                <Route path="/" component={Landing} exact />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route component={Error} />
              </Switch>
  );
}
}

export default App;
