import React, { useState } from 'react';
import styles from './Search.module.css';
import {Input} from "../input/Input";
import {Button} from "../button/Button";


export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Здесь можно реализовать логику поиска или перенаправление на страницу поиска с параметрами
        console.log("Поиск:", searchTerm);
    };

    return (
        <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Поиск..."
                className={styles.searchInput}
            />
            <Button type="submit" className={styles.searchButton}>
                Искать
            </Button>
        </form>
    );
}