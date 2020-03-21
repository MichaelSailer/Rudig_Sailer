import React from "react"
import "./Login.modul.css"
import ButtonLogin from "../buttons/standardButton";

function UserLogin(){
    


    return(
        <div className="Login">
            <h2>
                Welcome to the Review Protal
            </h2>
            <p>Please Enter Username and Passwort</p>
                <div className="user">
                <h4>Username:</h4>
                <input id="username" type="text" value="username"></input>
                </div>
                <div className="password">
                <h4>Password:</h4>
                <input id="password" type="password" value="1234"></input><br/>
                </div>
                <div className="buttons">
                <ButtonLogin text="Login"/>
                <ButtonLogin text="Register"></ButtonLogin>
                </div>
        </div>

    );

    
}
export default UserLogin;