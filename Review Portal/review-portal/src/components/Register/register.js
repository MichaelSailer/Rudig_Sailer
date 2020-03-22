import React from "react";
import classes from "./register.module.css";
import RegisterField from "../InputField/Register/RegisterField";
import ButtonRegister from "../buttons/standardButton";


function Register() {
  return (
    <div className={classes.Register}>
      <div className ={classes.RegisterForum}>
          <h2>Register</h2>
          <p>Bitte geben sie alle Daten ein</p>
          <RegisterField /> 
          <div className={classes.buttons}>        
            <ButtonRegister text="Register"/>      
            <ButtonRegister text="Home" type="home"/>
          </div>
      </div>
    </div>
  );
}

export default Register;
