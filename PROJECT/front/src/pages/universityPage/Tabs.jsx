import React, { useState } from 'react';
import styles from './Tabs.module.css';

const Tabs = ({ onChangeTab }) => {
    const [activeTab, setActiveTab] = useState('posts');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        onChangeTab(tab);
    };

    return (
        <div className={styles.tabs}>
            <button
                className={activeTab === 'posts' ? styles.active : ''}
                onClick={() => handleTabClick('posts')}
            >
                Посты
            </button>
            <button
                className={activeTab === 'places' ? styles.active : ''}
                onClick={() => handleTabClick('places')}
            >
                Места
            </button>
            <button
                className={activeTab === 'reviews' ? styles.active : ''}
                onClick={() => handleTabClick('reviews')}
            >
                Отзывы
            </button>
            <button
                className={activeTab === 'students-live' ? styles.active : ''}
                onClick={() => handleTabClick('students-live')}
            >
                Жизнь студентов
            </button>
        </div>
    );
};

export default Tabs;
