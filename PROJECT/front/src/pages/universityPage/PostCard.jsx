import React from 'react';
import styles from './UniversityPage.module.css';
import {Link} from "react-router-dom";

const PostCard = ({ post }) => {
    return (

        <Link key={post.id} className={styles.postCard} to={`/posts/${post.id}`}>
            {post.photos &&
                <img src={post.photos[0].image} alt="Post" className={styles.postImage}/>}
        </Link>
    );
};

export default PostCard;
