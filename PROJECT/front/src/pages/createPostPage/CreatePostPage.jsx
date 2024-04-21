import React, {useState} from 'react';
import styles from './CreatePostPage.module.css';
import { Input } from "../../components/generic/input/Input";
import Container from "../../components/generic/container/Container";
import Strap from "../../components/strap/Strap";
import useInput from "../../hooks/useInput";
import useAxios from "../../utils/useAxios";

const CreatePostPage = () => {
    const titleInput = useInput('');
    const descriptionInput = useInput('');
    const [images, setImages] = useState([]);

    const axiosInstance = useAxios();

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        console.log(files);
        setImages(files.slice(0, 10)); // Ограничение до 10 изображений
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(images);
        try {
            const response = await axiosInstance.post('/posts/', {
                title: titleInput.value,
                content: descriptionInput.value,
                photos: images
            });

            console.log('Post added:', response.data);

            // for (const image of images) {
            //     const responsePhotos = await axiosInstance.post('/photos/', {
            //         post_id: response.data.id,
            //         image: image,
            //     });
            //
            //     console.log('Photo added:', responsePhotos.data);
            // }



            titleInput.setValue('');
            descriptionInput.setValue('');
            setImages([]);
        } catch (error) {
            console.error('Failed to add post:', error);
        }
    };

    return (
        <Container>
            <Strap extraClasses={[styles.strap]}>
                <form onSubmit={handleSubmit} className={styles.form} method={'POST'} encType="multipart/form-data">
                    <h1>Добавление нового поста</h1>
                    <label>Название:
                        <Input type="text" {...titleInput} required />
                    </label>
                    <label>Описание:
                        <Input {...descriptionInput} required />
                    </label>
                    <label>Фотографии:
                        <Input type="file" name={'photos'} onChange={handleImageChange} multiple accept="image/*" />
                    </label>
                    <button type="submit" className={styles.submitButton}>Опубликовать</button>
                </form>
            </Strap>
        </Container>
    );
};

export default CreatePostPage;
