import React, { useState, useEffect } from 'react';
import useAxios from '../utils/useAxios';
import {useParams} from "react-router-dom";
import UserProfile from "../components/userProfile/UserProfile";
import PostList from "./universityPage/PostList";
import Strap from "../components/strap/Strap";
import Container from "../components/generic/container/Container"; // Обновите путь к вашему скрипту useAxios

const UserProfilePage = () => {
    const { userId } = useParams();

    const [user, setUser] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const axios = useAxios(); // Использование экземпляра Axios для запросов

    useEffect(() => {
        fetchUser();
        fetchFollowers();
        fetchFollowing();
    }, [userId]);

    const fetchUser = async () => {
        try {
            const response = await axios.get(`/users/${userId}`);
            setUser(response.data);
        } catch (error) {
            console.error('Ошибка при получении данных пользователя:', error);
        }
    };

    const fetchFollowers = async () => {
        try {
            const response = await axios.get(`/users/${userId}/followers`);
            setFollowers(response.data);
        } catch (error) {
            console.error('Ошибка при получении подписчиков:', error);
        }
    };

    const fetchFollowing = async () => {
        try {
            const response = await axios.get(`/users/${userId}/following`);
            setFollowing(response.data);
        } catch (error) {
            console.error('Ошибка при получении подписок:', error);
        }
    };

    if (!user){
        return <p>Loading...</p>
    }

    return (
        <Container>
                <UserProfile user={user} followersCount={user.followers_count} followingCount={user.following_count} postsCount={user.posts_count}></UserProfile>
                <Strap>
                    <h1>Посты</h1>
                    <PostList posts={user.posts}></PostList>
                </Strap>
        </Container>
    );
};

export default UserProfilePage;
