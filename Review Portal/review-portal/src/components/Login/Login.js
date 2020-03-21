import React, { useState } from "react";
import classes from "./Login.module.css";
import ButtonLogin from "../buttons/standardButton";

function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeHandlerUsername = event => {
    setUsername(event.target.value);
  };

  const onChangeHandlerPassword = event => {
    setPassword(event.target.value);
  };

  return (
    <div className={classes.LoginPage}>
      <div className={classes.LoginContent}>
        <h2>Welcome to the Review Protal</h2>
        <p>Please Enter Username and Passwort</p>
        <div className={classes.user}>
          <h4>Username:</h4>
          <input
            type="text"
            value={username}
            onChange={event => {
              onChangeHandlerUsername(event);
            }}
            placeholder="username"
          ></input>
        </div>
        <div className={classes.password}>
          <h4>Password:</h4>
          <input
            type="password"
            value={password}
            onChange={event => {
              onChangeHandlerPassword(event);
            }}
            placeholder="1234"
          ></input>
          <br />
        </div>
        <div className={classes.buttons}>
          <ButtonLogin type="login" text="Login" />
          <ButtonLogin type="register" text="Register"></ButtonLogin>
        </div>
      </div>
    </div>
  );
}
export default UserLogin;
