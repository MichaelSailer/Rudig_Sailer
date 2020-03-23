import React from "react";
import UserLogin from "./components/Login/Login.js";
import Register from "./components/Register/register";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/dashboard/main/main.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/main" exact component={Main} ></Route>
        <Route path="/" exact component={UserLogin}></Route>
      </Switch>
    </div>
  );
}

export default App;
