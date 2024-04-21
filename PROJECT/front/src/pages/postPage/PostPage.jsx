import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './PostPage.module.css';
import Container from "../../components/generic/container/Container";
import Carousel from "./Carousel";
import Strap from "../../components/strap/Strap";
import CommentForm from "./CommentForm";


const PostPage = () => {
    const {postId} = useParams();
    const [post, setPost] = useState(null);
    const [university, setUniversity] = useState(null);
    
    function loadData(){
        axios.get(`http://localhost:8000/api/posts/${postId}/`)
            .then(response => {
                setPost(response.data);

                axios.get(`http://localhost:8000/api/universities/${response.data.university}/`)
                    .then(response => {
                        setUniversity(response.data);
                    })
                    .catch(error => {
                        console.error('Error fetching university:', error);
                    });

            })
            .catch(error => {
                console.error('Error fetching post:', error);
            });
    }
    
    useEffect(() => {
        loadData();
    }, [postId]);

    function addComment(comment) {
        post.comments.push(comment);
        loadData();
    }


    if (!post || !university) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Strap extraClasses={[styles.strap]}>
                <div className={styles.header}>
                    <img src={university.avatar} alt={university.name} className={styles.avatar}/>
                    <h1 className={styles.title}>{university.name}</h1>
                </div>
                <Carousel images={post.photos}></Carousel>
                <h3>{post.title}</h3>
                <p>{post.content}</p>

                <p>Likes: {post.like_count}</p>
                <div>
                    <h3>{post.comments.length} комментариев</h3>
                    {/*<Input placeholder={'Введите комментарий'}></Input>*/}
                    <CommentForm postId={post.id} onSend={addComment}></CommentForm>
                    <div className={styles.commentSection}>
                        {post.comments.map(comment => (
                            <div key={comment.id} className={styles.comment}>
                                <p>{comment.author.username}: {comment.content}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </Strap>
        </Container>
    );
};

export default PostPage;
