import React from "react";
import classes from "./standardButton.module.css";
import { withRouter } from "react-router-dom";

function ButtonLogin(props) {
  function SwitchLocation() {
    if (props.type === "login") {
      console.log("Es wird Logged in");
    } else if(props.type === "register"){
      console.log("Es wird die Registerseite geöffnet");
      props.history.push("/register");
    }else if(props.type === "home"){
      props.history.push("/");
    }
  }

  return (
    <div>
      <button className={classes.standardButton} onClick={SwitchLocation}>
        {props.text}
      </button>
    </div>
  );
}

export default withRouter(ButtonLogin);
