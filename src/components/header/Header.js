import React, { useState } from "react"
import Button from "../button/Button"
import styles from "./header.module.scss"


const Header = () => 
{
    return (
        <>
            <div className={styles["header"]}>
                <div className={styles["logo-section"]}>
                    <img src='/icons/logo.svg' alt="logo"/>
                    <h1 className={styles["title"]}>Flatshare</h1>
                </div>

                <div className={styles["navigation"]}>
                    <ul>
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>Get a roommate</li>
                        <li>FAQ</li>
                        <li><Button size="small" addIcon>GET STARTED</Button></li>
                    </ul>                
                </div>
            </div>
                       
        </>
    )
}

export default Header
