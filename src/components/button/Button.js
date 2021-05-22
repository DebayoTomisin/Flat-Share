import React from "react"
import styles from "./button.module.scss"

const Button = props =>
{
    const { 
        children, 
        className, 
        onClick, 
        size,
        type
    } = props;

    return (
        <button
            className={[
                styles.button,
                styles[type || "primary"],
                styles[size],
                className
            ].join(" ")}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
