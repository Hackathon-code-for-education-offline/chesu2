import React from 'react';

import styles from './Rating.module.css';

import { ReactComponent as Star } from './star.svg';
import { ReactComponent as StarEmpty } from './star-empty.svg';
import SecondaryText from "../generic/textes/SecondaryText";

const Rating = ({ average, count }) => {
    const stars = Array.from({ length: 5 }, (_, index) => {
        const fillLevel = Math.max(0, Math.min(1, average - index));
        return (
            <div className={styles.star} key={index}>
                <StarEmpty className={[styles.star, styles.empty].join(' ')}/>
                <Star className={[styles.star, styles.fille].join(' ')} style={{clipPath: `polygon(0 0, ${fillLevel * 100}% 0, ${fillLevel * 100}% 100%, 0 100%)`}}/>
            </div>
        );
    });

    return (
        <div className={styles.rating}>
            <div className={styles.stars}>
                {stars}
            </div>
            <span>{average} <SecondaryText>● {count} оценки</SecondaryText></span>
        </div>);
};

export default Rating;
