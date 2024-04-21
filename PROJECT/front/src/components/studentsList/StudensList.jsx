// StudentList.js
import React, {useEffect, useState} from 'react';
import styles from './StudentsList.module.css';
import axios from "axios";
import {StudentCard} from "./StudentCard";
import Container from "../generic/container/Container";
import Search from "../generic/search/Search";

 export default function StudentList() {
     const [students, setStudents] = useState([]);

     useEffect(() => {
         const fetchData = async () => {
             try {
                 const response = await axios.get('http://localhost:8000/api/users/');
                 setStudents(response.data);
                 console.log(response.data);
             } catch (error) {
                 console.error('Error fetching data:', error);
             }
         };

         fetchData();
     }, []);

    return (
        <Container>
            <Search />
            <div className={styles.studentList}>
                {students.map(student => (
                    <StudentCard key={student.id} student={student}/>
                ))}
            </div>
        </Container>
    );
 }
