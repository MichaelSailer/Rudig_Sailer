import React from 'react'
import classes from '../header/header.module.css'
import img from './mann.svg'

function MainHeader(){

    return(
        <div className={classes.header}>
            <div className={classes.userDetails}>
                <img src="../../../img/mann.svg" alt="profil"/>
                <p>Michael Sailer</p>
                <p>sik</p>
            </div>
            <div className={classes.titel}>
                <h2>Dashboard</h2>
            </div>
            <div className={classes.settings}>
                <p>setting</p>
            </div>
        </div>

    );
}

export default MainHeader