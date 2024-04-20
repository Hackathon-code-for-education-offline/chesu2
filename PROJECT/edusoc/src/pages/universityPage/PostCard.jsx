import React from 'react';
import styles from './UniversityPage.module.css';

const PostCard = ({ post }) => {
    return (
        <div className={styles.postCard}>
            {post.photos &&
                <img src={post.photos[0].image} alt="Post" className={styles.postImage}/>}
        </div>
    );
};

export default PostCard;
