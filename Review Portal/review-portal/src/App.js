import React from 'react';
import './App.css';
import UserLogin from './components/Login/Login.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from './components/Register/register';

function App() {
  return (
    <Router>
    <Switch>    
    <Route  path="/" exact component={UserLogin} /> 
    <Route path="/register" component={Register} />
    </Switch>

   </Router>
  );
}

export default App;
