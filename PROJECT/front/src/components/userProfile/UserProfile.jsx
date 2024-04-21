import React from 'react';
import styles from './UserProfile.module.css';
import {Button, TransparentButton} from "../generic/button/Button";
import Rating from "../rating/Rating";
import {useAuthStore} from "../../store/auth";
import {Navigate, useNavigate} from "react-router-dom";
import axios from "axios";

const UserProfile = ({ user, followersCount, followingCount, postsCount }) => {
    const [isLoggedIn, loogedUser] = useAuthStore((state) => [
        state.isLoggedIn,
        state.user,
    ]);

    const navigate = useNavigate();

    function handleCreatePost(){
        navigate('/createpost');
    }

    const handleOpenChat = async () => {
        try {
            const response = await axios.get(`/api/chat/${user.id}/`);
            navigate(`/chatroom/${response.data.id}`);
        } catch (error) {
            console.error('Failed to open chat:', error);
        }
    };

    return (
        <div className={styles.card}>
            <div className={styles.profile}>
                <div className={styles.row}>
                    <img src={user.avatar} className={styles.avatar}/>
                    <div className={styles.info}>
                        <h1 className={styles.username}>{user.username}</h1>
                        <p className={styles.bio}>{user.description || "Нет описания"}</p>

                        <Rating average={user.reviews_average} count={user.reviews_count}></Rating>
                    </div>
                </div>

                <div className={styles.counter}>
                    <div>
                        <div className={styles.counterTitle}>Подписчики</div>
                        <div className={styles.counterValue}>{followersCount}</div>
                    </div>
                    <div>
                        <div className={styles.counterTitle}>Подписки</div>
                        <div className={styles.counterValue}>{followingCount}</div>
                    </div>
                    <div>
                        <div className={styles.counterTitle}>Публикации</div>
                        <div className={styles.counterValue}>{postsCount}</div>
                    </div>
                </div>

                {user.skills.length > 0 &&
                    <div className={styles.skillsPanel}>
                        <h3>Навыки:</h3>
                        <div className={styles.skills}>
                            {user.skills && user.skills.map(skill => (
                                <TransparentButton key={skill.id} extraClasses={[styles.skillCard]}>
                                    <div className={styles.skillName}>{skill.name}</div>
                                </TransparentButton>
                            ))}
                        </div>
                    </div>
                }

                {isLoggedIn() && user.id === loogedUser().user_id ?

                    <div className={styles.buttons}>
                        <Button>Редактировать</Button>
                        <Button onClick={handleCreatePost}>Новая публикация</Button>
                        <Button onClick={() => navigate('/logout')}>Выйти</Button>
                    </div>

                    :

                    <div className={styles.buttons}>
                        <Button onClick={handleOpenChat}>Написать</Button>
                        <Button>Написать отзыв</Button>
                    </div>
                }

            </div>
        </div>
    );
};

export default UserProfile;
