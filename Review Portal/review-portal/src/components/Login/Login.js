import React from "react";
import classes from "./Login.module.css";
import ButtonLogin from "../buttons/standardButton";
import LoginField from '../InputField/Login/LoginField';

function UserLogin() {
  return (
    <div className={classes.LoginPage}>
      <div className={classes.LoginContent}>
        <h2>Welcome to the Review Protal</h2>
        <p>Please Enter Username and Passwort</p>
        <LoginField />
        <div className={classes.buttons}>
          <ButtonLogin type="main" text="Login" />
          <ButtonLogin type="register" text="Register"></ButtonLogin>
        </div>
      </div>
    </div>
  );
}
export default UserLogin;
