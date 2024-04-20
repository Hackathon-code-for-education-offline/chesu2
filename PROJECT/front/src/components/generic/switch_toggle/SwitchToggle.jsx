import styles from "./SwitchToggle.module.css";
import React from 'react';

export function SwitchToggle({isChecked, onChecked, width='55px', height='28px'}) {

    const handleToggle = (event) => {
        onChecked(event.target.checked);
    };

    return (
        <>
            <style>
                {`
                    :root{
                        --width: ${width};
                        --height: ${height};
                    }
                `}
            </style>

            <div className={styles.themeSwitch}>
                <input type="checkbox" id="toggle-switch" className={styles.switchCheckbox} onChange={handleToggle} checked={isChecked}/>
                <label className={styles.switchLabel} htmlFor="toggle-switch">
                    <span className={styles.switchInner}></span>
                </label>
            </div>
        </>
    );
}