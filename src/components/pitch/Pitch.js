import React from "react"
import styles from "./pitch.module.scss"

const Pitch = props =>
{
    const { className } = props    
    return (
        <div className={[styles["pitch"], className].join(" ")}>

            <div className={styles["why-section"]}>

                <h2 className={styles["title"]}>Why choose Flatshare?</h2>

                <div className={styles["why-points-section"]}>

                    <div className={styles["why-points"]}>
                        <div className={styles["icon-space"]}>
                            <img src="/icons/mark-icon.svg" alt="mark icon"/>
                        </div>
                        <div className={styles["content"]}>
                            <h2 className={styles["content-title"]}>Fast and Easy</h2>
                            <p className={styles["content-para"]}>We make the process of finding a flat/roomate fast and easier by getting detaild information for mutual connection</p>
                        </div>
                    </div>

                    <div className={styles["why-points"]}>
                        <div className={styles["icon-space"]}>
                            <img src="/icons/mark-icon.svg" alt="mark icon"/>
                        </div>
                        <div className={styles["content"]}>
                            <h2 className={styles["content-title"]}>The perfect match</h2>
                            <p className={styles["content-para"]}>We lessen the burden by providing you with numerous compatible roomates options based on mutual criteria</p>
                        </div>
                    </div>

                    <div className={styles["why-points"]}>
                        <div className={styles["icon-space"]}>
                            <img src="/icons/mark-icon.svg" alt="mark icon"/>
                        </div>
                        <div className={styles["content"]}>
                            <h2 className={styles["content-title"]}>Safe and secured</h2>
                            <p className={styles["content-para"]}>Having been established in all the states in Nigeria, Flatshare is very secure as your information is strictly kept private. We also verify identities through multiple sources so you can search with confidence.</p>
                        </div>
                    </div>

                    <div className={styles["why-points"]}>
                        <div className={styles["icon-space"]}>
                            <img src="/icons/mark-icon.svg" alt="mark icon"/>
                        </div>
                        <div className={styles["content"]}>
                            <h2 className={styles["content-title"]}>Free sign up</h2>
                            <p className={styles["content-para"]}>Create your personal roommate profile and get started in minutes! Browse your Perfect Matches, save your favorites and send messages to your top picks... all for free. Want even more? Check out our VIP membership starting at only $5.99!</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles["customer-credits"]}>
                <h1>Our clients speak</h1>
            </div>
        </div>
        
    )
}

export default Pitch
