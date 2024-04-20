import React from 'react';
import styles from './Strap.module.css'

function Strap({children}){
    return (
        <div className={styles.strap}>
            {children}
        </div>
    );
}

export default Strap;
