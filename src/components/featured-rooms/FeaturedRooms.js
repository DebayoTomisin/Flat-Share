import React from "react"
import styles from "./featured.module.scss"

const FeaturedRooms = props =>
{
    const {className } = props

    return (
        <div className={[styles["section"], className].join(" ")}>
            <div className={styles["title"]}>
                <h2 className={styles["title-h2"]}>How to find Room/FlatMate</h2>
                <h2 className={styles["title-cont"]}>on Flatshare</h2>
                <p>Getting a room mate just got easeir. All you have to do is:</p>
            </div>

            <div className={styles["find-room"]}>
                <div className={styles["img-desc"]}>
                    <p>
                        No man can prevail
                        My confidence is you, what cannot do does not exsist
                    </p>
                </div>

                <div className={styles["instructions"]}>

                    <div className={styles["list"]}>
                        <div className={styles["number"]}>
                            <div className={styles["numbering"]}>1</div>
                            <img src="/icons/arrow-1.svg" alt="arrow one"/>
                        </div>
                        
                        <div className={styles["steps"]}>
                            <h3 className={styles["steps-title"]}>Post Your Room/Flat</h3>
                            <p className={styles["steps-para"]}>List an empty room for free and tell us about your ideal roommate in a few simple steps</p>
                        </div>
                    </div>

                    <div className={styles["list"]}>
                        <div className={styles["number"]}>
                            <div className={styles["numbering"]}>2</div>
                            <img src="/icons/arrow-1.svg" alt="arrow one"/>
                        </div>
                        
                        <div className={styles["steps"]}>
                            <h3 className={styles["steps-title"]}>Get Verified</h3>
                            <p className={styles["steps-para"]}>Get a roommate/flatmate faster by adding your social media for background checks</p>
                        </div>
                    </div>

                    <div className={styles["list"]}>

                        <div className={styles["number"]}>
                            <div className={styles["numbering"]}>3</div>
                            <img src="/icons/arrow-1.svg" alt="arrow one"/>
                        </div>
                        
                        <div className={styles["steps"]}>
                            <h3 className={styles["steps-title"]}>Review or invite applicants</h3>
                            <p className={styles["steps-para"]}>You can approve or decline a chat request and booking requests. You can also invite people to move in.</p>
                        </div>
                    </div>

                    <div className={styles["list"]}>

                        <div className={styles["number"]}>
                            <div className={styles["numbering"]}>4</div>
                            <img src="/icons/arrow-4.svg" alt="arrow one"/>
                        </div>
                        
                        <div className={styles["steps"]}>
                            <h3 className={styles["steps-title"]}>Post Your Room/Flat</h3>
                            <p className={styles["steps-para"]}>List an empty room for free and tell us about your ideal roommate in a few simple steps</p>
                        </div>
                    </div>                   
                </div>
            </div>           
        </div>
    )
}

export default FeaturedRooms
