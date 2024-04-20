import styles from './Form.module.css'
import React from 'react';


export function Form({children}) {

    return (
        <form>
            {children}
        </form>
    );
}