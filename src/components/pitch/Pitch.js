import React from "react"
import styles from "./pitch.module.scss"

const Pitch = props =>
{
    const { className } = props    
    return (
        <div className={[styles["pitch"], className].join(" ")}>
            <h1>Why flat share?</h1>
        </div>
        
    )
}

export default Pitch
