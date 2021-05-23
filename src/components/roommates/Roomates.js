import React from "react"
import styles from "./roommate.module.scss"

const Roomates = props =>
{
    const { className } = props
    
    return (
        <div className={[styles["card"], className].join(" ")}>
            <h1 className={styles["title"]}>Verified Potential Roommates on Flatshare</h1>
            
            <div className={styles["images"]}>
                <div>
                    <img className={styles["image"]} src="images/Ellipse 24.png" alt="jane cooper"/>
                    <div className={styles["description"]}>
                        <h2>Jane Cooper</h2>
                        <p>CEO at ABC cooperation</p>
                    </div>
                </div>

                <div>
                    <img className={styles["image"]} src="images/Ellipse 30.png" alt="jane cooper"/>
                    <div className={styles["description"]}>
                        <h2>Jane Cooper</h2>
                        <p>CEO at ABC cooperation</p>
                    </div>
                </div>

                <div>
                    <img className={styles["image"]} src="images/Ellipse 28.png" alt="jane cooper"/>
                    <div className={styles["description"]}>
                        <h2>Jane Cooper</h2>
                        <p>CEO at ABC cooperation</p>
                    </div>
                </div>

                <div>
                    <img className={styles["image"]} src="images/Ellipse 29.png" alt="jane cooper"/>
                    <div className={styles["description"]}>
                        <h2>Jane Cooper</h2>
                        <p>CEO at ABC cooperation</p>
                    </div>
                </div>
                
            </div>           
        </div>
    )
}

export default Roomates
