import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './UniversityPage.module.css';

import PostList from './PostList';
import Tabs from "./Tabs";

const UniversityPage = () => {
    const { universityId } = useParams();
    const [university, setUniversity] = useState(null);

    const [tab, setTab] = useState('posts');

    function onChangeTab(tab) {
        setTab(tab);
    }

    useEffect(() => {
        if (universityId) {
            axios.get(`http://localhost:8000/api/universities/${universityId}/`)
                .then(response => {
                    setUniversity(response.data);
                })
                .catch(error => {
                    console.error('Error fetching university:', error);
                });
        }
    }, [universityId]);

    if (!university) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.universityPageWrapper}>
            <div className={styles.header}>
                <img src={university.avatar} alt={university.name} className={styles.avatar}/>
                <div className={styles.infoDiv}>
                    <h1 className={styles.title}>{university.name}</h1>
                    <p className={styles.description}>{university.description}</p>
                </div>
            </div>

            <Tabs onChangeTab={onChangeTab}></Tabs>

            {tab === 'posts' && <PostList universityId={universityId} posts={university.posts}/>}

        </div>
    );
};

export default UniversityPage;
