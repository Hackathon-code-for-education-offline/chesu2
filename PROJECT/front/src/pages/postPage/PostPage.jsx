import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './PostPage.module.css';
import Container from "../../components/generic/container/Container";
import Carousel from "./Carousel";
import Strap from "../../components/strap/Strap";
import CommentForm from "./CommentForm";
import {Button} from "../../components/generic/button/Button";


const PostPage = () => {
    const {postId} = useParams();
    const [post, setPost] = useState(null);
    const [university, setUniversity] = useState(null);

    const [profile, setProfile] = useState(null);
    
    function loadData(){
        axios.get(`http://localhost:8000/api/posts/${postId}/`)
            .then(response => {
                setPost(response.data);

                console.log(response.data);

                if (response.data.university_id){
                    axios.get(`http://localhost:8000/api/universities/${response.data.university_id}/`)
                        .then(response => {
                            setUniversity(response.data);
                            setProfile(response.data);
                        })
                        .catch(error => {
                            console.error('Error fetching university:', error);
                        });
                }
                else{
                    axios.get(`http://localhost:8000/api/users/${response.data.author}/`)
                        .then(response => {
                            console.log(response.data);
                            setProfile({
                                name: response.data.last_name + " " + response.data.first_name,
                                avatar: response.data.avatar,
                            });
                        })
                        .catch(error => {
                            console.error('Error fetching university:', error);
                        });
                }

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


    if (!post || !profile) {
        return <div>Loading...</div>;
    }

    console.log(profile);

    return (
        <Container>
            <Strap extraClasses={[styles.strap]}>

                <div className={styles.header}>
                    <div className={styles.headerInfo}>
                        <img src={profile.avatar} alt={profile.name} className={styles.avatar}/>
                        <h3 className={styles.title}>{profile.name}</h3>
                    </div>
                    <Button>Подписаться</Button>
                </div>

                {/*{university ?*/}
                {/*    <div className={styles.header}>*/}
                {/*        <img src={university.avatar} alt={university.name} className={styles.avatar}/>*/}
                {/*        <h1 className={styles.title}>{university.name}</h1>*/}
                {/*    </div>*/}
                {/*    :*/}
                {/*    <div className={styles.header}>*/}
                {/*        <img src={university.avatar} alt={university.name} className={styles.avatar}/>*/}
                {/*        <h1 className={styles.title}>{university.name}</h1>*/}
                {/*    </div>*/}
                {/*}*/}

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
