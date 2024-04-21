import styles from './Button.module.css'
import React from 'react';


function Button({children, onClick, className = styles.button, extraClasses = [], ...props}) {

    function click(){
        if (!onClick){
            console.warn(`[Button] [click] onClick is ${onClick}`);
            return;
        }

        onClick();
    }

    let classes = className;

    if (extraClasses.length > 0){
        for (let i in extraClasses){
            classes += ' ' + extraClasses[i];
        }
    }

    return (
        <>
            <button className={classes} onClick={click} {...props}>
                {children}
            </button>
        </>
    );
}

function TransparentButton({reverse= false, active = false, ...props}) {
    if (reverse){
        props.extraClasses ? props.extraClasses.push(styles.reverse) : props.extraClasses = [styles.reverse];
    }

    if (active){
        props.extraClasses ? props.extraClasses.push(styles.active) : props.extraClasses = [styles.active];
    }

    return (
      <>
          <Button className={styles.transparentButton} {...props}></Button>
      </>
    );
}


export {Button, TransparentButton};