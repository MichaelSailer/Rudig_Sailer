import React from "react";
import classes from "./button.module.css";
import { withRouter } from "react-router-dom";

function ButtonLogin(props) {
  function SwitchLocation() {
    if (props.type === "login") {
      console.log("Es wird Logged in");
    } else {
      console.log("Es wird die Registerseite geöffnet");
      props.history.push("/register");
    }
  }

  return (
    <div>
      <button className={classes.LoginButton} onClick={SwitchLocation}>
        {props.text}
      </button>
    </div>
  );
}

export default withRouter(ButtonLogin);
