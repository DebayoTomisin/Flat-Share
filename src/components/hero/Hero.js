import React from "react"
import styles from "./hero.module.scss"
import Button from "../button/Button"
import Roomates from "../roommates/Roomates"

const Hero = props => 
{
    const { className } = props

    return (
        <div className={[ styles["hero"], className ].join(" ")}>
            <div className={styles["section-1"]}>
                <div className={styles["titles"]}>
                    <h2 className={styles["title"]}>Looking for a shared apartment anywhere in Lagos?</h2>
                    <p className={styles["subtitle"]}>Find your ideal room/flatmate with our apartment finder.</p>
                    <p className={styles["subtitle"]}>Have a room or flat, let us know</p>
                </div>
                <div className={styles["actions"]}>
                    <Button type="light" className={styles["button-1"]}  size="large" minWidth addIcon>Get a roommate</Button>
                    <Button type="light" className={styles["button-2"]}  size="large" minWidth addIcon>Select city</Button>
                    <Button size="large">Go</Button>
                </div>
            </div>
            <div className={styles["section-2"]}>
                <div className={styles["section-background"]}>
                    <img className={styles["bcg-one"]} src="icons/purple-icon.svg" alt="purple icon"/>
                    <img className={styles["bcg-two"]} src="icons/purple-icon.svg" alt="purple icon"/>
                </div>
                <div className={styles["main-image"]}>
                    <img src="images/standing-lady.svg" alt="woman basically"/>
                </div>   
            </div>  
        </div>        
    )
}

export default Hero
