import React from 'react';
import styles from './Strap.module.css'

function Strap({children, extraClasses = []}){
    const classList = [styles.strap, ...extraClasses];
    return (
        <div className={classList.join(' ')}>
            {children}
        </div>
    );
}

export default Strap;
