import React from 'react'
import './button.modul.css'

function ButtonLogin(props){
    function SayHello(){
        return null
    }
    return(
        <div>
        <button onClick={SayHello}>{props.text}</button>
        </div>
    );
}

export default ButtonLogin;