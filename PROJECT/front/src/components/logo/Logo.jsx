import React from 'react';
import styles from './Logo.module.css';

let title_1 = 'Soc';
let title_2 = 'Edu';

export function Logo() {
    return (
        <h1 className={styles.logo}>
            <span className={styles.part1}>{title_1}</span>
            <span className={styles.part2}>{title_2}</span>
        </h1>
    );
}