import React from "react";
import "./App.css";
import UserLogin from "./components/Login/Login.js";
import Register from "./components/Register/register";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="Home">
      <Switch>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/" exact component={UserLogin}></Route>
      </Switch>
    </div>
  );
}

export default App;
