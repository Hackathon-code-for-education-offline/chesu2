import React, { useState, useEffect } from 'react';
import styles from './UserProfile.module.css';
import useAxios from './path/to/your/useAxios'; // Обновите путь к вашему скрипту useAxios

const UserProfile = ({ userId }) => {
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

    return (
        <div className={styles.profile}>
            {user && (
                <div className={styles.userInfo}>
                    <img src={user.avatar} alt={user.username} className={styles.avatar} />
                    <h1 className={styles.username}>{user.username}</h1>
                    <p className={styles.description}>{user.bio}</p>
                </div>
            )}
            <div className={styles.socialInfo}>
                <h2>Followers</h2>
                <ul>
                    {followers.map(follower => (
                        <li key={follower.id}>{follower.username}</li>
                    ))}
                </ul>
                <h2>Following</h2>
                <ul>
                    {following.map(followee => (
                        <li key={followee.id}>{followee.username}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserProfile;
