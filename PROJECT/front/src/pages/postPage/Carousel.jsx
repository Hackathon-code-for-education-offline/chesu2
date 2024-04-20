import React, {useState} from "react";
import styles from "./Carousel.module.css";
import PostPage from "./PostPage";

const Carousel = ({images}) => {
    const [activePhotoIndex, setActivePhotoIndex] = useState(0);

    const setPhoto = (index) => {
        setActivePhotoIndex((prevIndex) => index);
    };

    const nextPhoto = () => {
        setActivePhotoIndex((prevIndex) =>
            prevIndex + 1 < images.length ? prevIndex + 1 : 0
        );
    };

    const prevPhoto = () => {
        setActivePhotoIndex((prevIndex) =>
            prevIndex - 1 >= 0 ? prevIndex - 1 : images.length - 1
        );
    };

    return (
        <div className={styles.wrapper}>
            <button onClick={prevPhoto} className={styles.arrow}>&lt;</button>

            <div className={styles.container}>
                {images.map((photo, index) => (
                    <div onClick={() => setPhoto(index)} key={index} className={[styles.card, index === activePhotoIndex && styles.active].join(' ')} style={{backgroundImage: `url(${photo.image})`}}>
                        <div className={styles.row}>
                            <div className={styles.icon}>{index + 1}</div>
                            <div className={styles.description}>
                                <h4 className={styles.descriptionTitle}>
                                    {/*Exploring the Unknown: The Journey of an Astronaut*/}
                                </h4>
                            </div>
                        </div>
                    </div>

                    // <img
                    //     className={[styles.photo, index === activePhotoIndex && styles.active].join(' ')}
                    //     src={photo.image}
                    //     alt="Slide"
                    // />
                ))}
            </div>

            <button onClick={nextPhoto} className={styles.arrow}>&gt;</button>
        </div>
    );
};

export default Carousel;