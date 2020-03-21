import React from "react";
import UserLogin from "./components/Login/Login.js";
import Register from "./components/Register/register";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/" exact component={UserLogin}></Route>
      </Switch>
    </div>
  );
}

export default App;
