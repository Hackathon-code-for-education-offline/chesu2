import React, { useState } from 'react';
import styles from './CreatePostPage.module.css';
import {Input} from "../../components/generic/input/Input";
import Container from "../../components/generic/container/Container";
import Strap from "../../components/strap/Strap";
import useInput from "../../hooks/useInput";

const CreatePostPage = () => {
    const titleInput = useInput('');
    const descriptionInput = useInput('');
    const imagesInput = useInput([]);

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        console.log(files);
        imagesInput.setValue(files.slice(0, 10)); // Ограничение до 10 изображений
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Обработка отправки формы

        // Отправка данных на сервер
    };

    return (
        <Container>
            <Strap extraClasses={[styles.strap]}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h1>Добавление нового поста</h1>
                    <label>Название:
                        <Input
                            type="text"
                            {...titleInput}
                            required
                        />
                    </label>
                    <label>Описание:
                        <Input
                            {...descriptionInput}
                            required
                        />
                    </label>
                    <label>Фотографии:
                        <Input
                            type="file"
                            multiple
                            {...imagesInput}
                            accept="image/*"
                        />
                    </label>
                    <button type="submit" className={styles.submitButton}>Опубликовать</button>
                </form>
            </Strap>

        </Container>
    );
};

export default CreatePostPage;
