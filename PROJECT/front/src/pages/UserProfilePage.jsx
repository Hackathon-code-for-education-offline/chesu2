import React, { useState, useEffect } from 'react';
import useAxios from '../utils/useAxios';
import {useParams} from "react-router-dom";
import UserProfile from "../components/userProfile/UserProfile";
import PostList from "./universityPage/PostList";
import Strap from "../components/strap/Strap";
import Container from "../components/generic/container/Container";
import {useAuthStore} from "../store/auth";
import {Button} from "../components/generic/button/Button"; // Обновите путь к вашему скрипту useAxios

const UserProfilePage = () => {
    const [isLoggedIn, user] = useAuthStore((state) => [
        state.isLoggedIn,
        state.user,
    ]);

    const { userId } = useParams();

    const [visitUser, setUser] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const axios = useAxios(); // Использование экземпляра Axios для запросов

    useEffect(() => {
        fetchUser();
    }, [userId]);

    const fetchUser = async () => {
        try {
            const response = await axios.get(`/users/${userId}`);

            setUser(response.data);
        } catch (error) {
            console.error('Ошибка при получении данных пользователя:', error);
        }
    };

    if (!visitUser){
        return <p>Loading...</p>
    }

    return (
        <Container>
            <UserProfile user={visitUser} followersCount={visitUser.followers_count} followingCount={visitUser.following_count} postsCount={visitUser.posts_count}></UserProfile>

            {visitUser.posts.length > 0 ?
                <Strap>
                    <h1>Посты</h1>
                    <PostList posts={visitUser.posts}></PostList>
                </Strap>
                :
                <h1 style={{width: '100%', textAlign: 'center'}}>Нет постов</h1>
            }
</Container>
    );
};

export default UserProfilePage;
