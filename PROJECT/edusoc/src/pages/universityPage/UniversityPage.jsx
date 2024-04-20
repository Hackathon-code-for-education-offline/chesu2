import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './UniversityPage.module.css';

import PostList from './PostList';

const UniversityPage = () => {
    const { universityId } = useParams();
    const [university, setUniversity] = useState(null);

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
                <img src={university.avatar} alt={university.name} className={styles.avatar} />
                <h1 className={styles.title}>{university.name}</h1>
            </div>

            <PostList universityId={universityId} posts={university.posts}/>
        </div>
    );
};

export default UniversityPage;
