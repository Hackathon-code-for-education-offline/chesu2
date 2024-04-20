import React from 'react';
import styles from './Strap.module.css'

function Strap({children, extraClasses = []}){
    extraClasses.unshift(styles.strap)
    return (
        <div className={extraClasses.join(' ')}>
            {children}
        </div>
    );
}

export default Strap;
