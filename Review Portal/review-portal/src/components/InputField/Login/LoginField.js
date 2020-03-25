import React, { useState } from "react";
import classes from "./LoginField.module.css";

function LoginField(props) {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const onChangeState = e => {
    const value = e.target.value;
    setLogin({
      ...login,
      [e.target.name]: value
    });
  };
  return (
    <div className={classes.inputField}>
      <div className="username">
        <h4>Username</h4>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={login.username}
          onChange={event => {
            onChangeState(event);
          }}
        ></input>
      </div>
      <div className="password">
        <h4>Password</h4>
        <input
          type="password"
          placeholder="1234"
          name="password"
          value={login.password}
          onChange={event => {
            onChangeState(event);
          }}
        ></input>
      </div>
    </div>
  );
}

export default LoginField;
