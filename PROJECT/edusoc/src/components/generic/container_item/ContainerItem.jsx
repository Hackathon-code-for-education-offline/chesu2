import React from 'react';
import styles from './ConstainerItem.module.css'

function Container({children}){
    return (
        <div className={styles.containerItem}>
            {children}
        </div>
    );
}

export default Container;
