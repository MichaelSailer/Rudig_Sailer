import React from "react";
import classes from "./Login.module.css";
import ButtonLogin from "../buttons/standardButton";

function UserLogin() {
  function deletePwInput() {
    document.getElementById("password").value = "";
  }

  function deleteUnInput() {
    document.getElementById("username").value = "";
  }

  return (
    <div className={classes.Login}>
      <h2>Welcome to the Review Protal</h2>
      <p>Please Enter Username and Passwort</p>
      <div className={classes.user}>
        <h4>Username:</h4>
        <input
          id="username"
          type="text"
          value="username"
          onClick={deleteUnInput}
        ></input>
      </div>
      <div className={classes.password}>
        <h4>Password:</h4>
        <input
          id="password"
          type="password"
          value="1234"
          onClick={deletePwInput}
        ></input>
        <br />
      </div>
      <div className={classes.buttons}>
        <ButtonLogin type="login" text="Login" />
        <ButtonLogin type="register" text="Register"></ButtonLogin>
      </div>
    </div>
  );
}
export default UserLogin;
