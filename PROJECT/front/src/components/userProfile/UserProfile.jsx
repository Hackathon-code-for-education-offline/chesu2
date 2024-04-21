import React from 'react';
import styles from './UserProfile.module.css';
import {TransparentButton} from "../generic/button/Button";
import Rating from "../rating/Rating";

const UserProfile = ({ user, followersCount, followingCount, postsCount }) => {
    console.log(user);

    return (
        <div className={styles.card}>
            <div className={styles.profile}>
                <div className={styles.row}>
                    <img src={user.avatar} alt={user.username} className={styles.avatar}/>
                    <div className={styles.info}>
                        <h1 className={styles.username}>{user.username}</h1>
                        <p className={styles.bio}>{user.description || "No bio provided"}</p>

                        <Rating average={4.6} count={8}></Rating>
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

            </div>

        </div>
    );
};

export default UserProfile;
