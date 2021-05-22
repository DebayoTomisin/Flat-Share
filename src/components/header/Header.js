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
                    <ul className={styles["nav-items"]}>
                        <li className={styles["item"]}>About Us</li>
                        <li className={styles["item"]}>Our Services</li>
                        <li className={styles["item"]}>Get a roommate</li>
                        <li className={styles["item"]}>FAQ</li>
                        <li className={styles["item"]}><Button size="small" minWidth addIcon>GET STARTED</Button></li>
                    </ul>                
                </div>
            </div>
                       
        </>
    )
}

export default Header
