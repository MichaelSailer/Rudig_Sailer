import React from 'react'
import classes from '../header/header.module.css'
import { IoMdOptions, IoMdContact } from 'react-icons/io';

function MainHeader(){

    return(
        <div className={classes.header}>
            <div className={classes.userDetails}>
                <IoMdContact />
                <div className={classes.userInformation}>
                    <p>Michael Sailer </p>
                    <p>sik</p>
                </div>
            </div>
            
            <div className={classes.settings}>
            <IoMdOptions />

            </div>
        </div>

    );
}

export default MainHeader