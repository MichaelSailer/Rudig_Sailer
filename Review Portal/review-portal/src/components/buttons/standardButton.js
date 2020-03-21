import React from 'react'
import './button.modul.css'

function ButtonLogin(props){
    
    function SayHello(){
        if(props.type === "login"){
            console.log("Es wird Logged in")
        }else{
            console.log("Es wird die Registerseite geöffnet")
        }
    }

    return(
        <div>
        <button onClick={SayHello}>{props.text}</button>
        </div>
    );
}

export default ButtonLogin;