import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UniversityList.module.css';
import Container from "../generic/container/Container";
import {Link} from "react-router-dom";

const UniversityList = () => {
    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/universities/');
                setUniversities(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <h1 className={styles.title}>Университеты</h1>
            <div className={styles.listContainer}>
                {universities.map(university => (
                    <Link key={university.id} className={styles.universityCard} to={`/universities/${university.id}`}>
                        <img src={university.avatar || 'default-image-url.jpg'} alt={university.name}
                             className={styles.avatar}/>
                        <div className={styles.universityInfo}>
                            <h2 className={styles.universityName}>{university.name}</h2>
                            <p className={styles.location}>{university.location}</p>
                            <p className={styles.description}>{university.description}</p>
                            <div className={styles.faculties}>
                                <h3 className={styles.facultyTitle}>Факультеты:</h3>
                                <div className={styles.facultyList}>
                                    {university.faculties.map(faculty => (
                                        <div key={faculty.id} className={styles.facultyCard}>
                                            {faculty.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Container>


    );
};

export default UniversityList;
