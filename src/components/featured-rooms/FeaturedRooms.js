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

            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default FeaturedRooms
