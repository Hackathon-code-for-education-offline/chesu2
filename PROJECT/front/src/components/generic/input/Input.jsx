import styles from './Input.module.css'
import React from 'react';


export function Input({type, placeholder, value, onChange, multiple = false, required = true, ...props}) {
    return (
        <>
            <input className={styles.input} type={type} multiple={multiple} required={required} placeholder={placeholder} value={value} onChange={onChange}/>
        </>
    );
}