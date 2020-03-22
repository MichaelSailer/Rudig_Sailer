import React, { useState } from 'react'
import classes from './RegisterField.module.css'

function RegisterField(){
    const [registerState,setRegisterState] = useState({
        username:"",
        password:"",
        email:""        
    })

    const onChangeState = e => {
        const value = e.target.value
        setRegisterState({
            ...registerState,
            [e.target.name]: value
        })
    }

    return (
        <div className={classes.RegisterForm}>
            <div className={classes.username}>
            <h4>Username</h4>
            <input
              type= "text"
              placeholder= "username"
              name = "username"
              value={registerState.username}
              onChange={event => {
                onChangeState(event);
              }}
            ></input>
          </div>
          <div className={classes.password}>
            <h4>Password</h4>
            <input
              type= "password"
              placeholder= "1234"
              name = "password"
              value={registerState.password}
              onChange={event => {
                onChangeState(event);
              }}
            ></input>
            </div>
            <div className={classes.email}>
            <h4>E-Mail</h4>
            <input
              type= "email"
              placeholder= "muster@gmail.com"
              name = "email"
              value={registerState.email}
              onChange={event => {
                onChangeState(event);
              }}
            ></input>
            </div>


        </div>
    );
}

export default RegisterField;