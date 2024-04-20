import React, { useState } from 'react';
import useAxios from '../../utils/useAxios';
import styles from './PostPage.module.css';
import {Input} from "../../components/generic/input/Input";
import {Button} from "../../components/generic/button/Button";

const CommentForm = ({ postId, onSend = null}) => {
    const [comment, setComment] = useState('');
    const axiosInstance = useAxios();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!comment) return;

        try {
            const response = await axiosInstance.post('/comments/', {
                post: postId,
                content: comment
            });
            console.log('Comment added:', response.data);

            onSend && onSend(comment);
            setComment('');
        } catch (error) {
            console.error('Failed to add comment:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.commentForm}>
            <Input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                required
            />
            <Button type="submit" extraClasses={[styles.commentSendButton]}>Отправить</Button>
        </form>
    );
};

export default CommentForm;
