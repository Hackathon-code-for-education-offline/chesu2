import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './PostCard';
import styles from './UniversityPage.module.css';

const PostList = ({ posts }) => {
    return (
        <div className={styles.postList}>
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
