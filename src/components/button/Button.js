import React from "react"
import styles from "./button.module.scss"

const Button = props =>
{
    const { 
        children, 
        className, 
        onClick, 
        size,
        type,
        minWidth,
        addIcon
    } = props;

    return (
        <button
            className={[
                styles.button,
                styles[type || "primary"],
                styles[size],
                minWidth && styles["min-width"],
                className
            ].join(" ")}
            onClick={onClick}
        >
            {children}
            {
                addIcon &&
                <img className={styles["add-icon"]} src="/icons/arrow-right.svg" alt="arrow right icon"/>
            }
        </button>
    )
}

export default Button
