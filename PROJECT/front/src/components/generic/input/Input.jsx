import styles from './Input.module.css'
import React from 'react';


export function Input({type, placeholder, value, onChange, ...props}) {
    return (
        <>
            <input className={styles.input} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        </>
    );
}