import React, {useState} from "react";
import {useAuthStore} from "../../store/auth";
import {Link, useNavigate} from "react-router-dom";
import styles from "./StudentCard.module.css"
import Rating from "../rating/Rating";
import {Button, TransparentButton} from "../generic/button/Button";

function StudentCard({ student }) {

    if (student.role !== 'student'){
        return ''
    }

    return (
        <UserProfile user={student} followersCount={student.followers_count} followingCount={student.following_count} postsCount={student.posts_count}></UserProfile>
    )
}


const UserProfile = ({ user, followersCount, followingCount, postsCount }) => {
    const [isLoggedIn, loogedUser] = useAuthStore((state) => [
        state.isLoggedIn,
        state.user,
    ]);

    const navigate = useNavigate();

    function handleCreatePost(){
        navigate('/createpost');
    }

    return (
        <Link to={`/users/${user.id}`} className={styles.card}>
            <div className={styles.profile}>
                <div className={styles.row}>
                    <img src={user.avatar} className={styles.avatar}/>
                    <div className={styles.info}>
                        <h1 className={styles.username}>{user.username}</h1>
                        <p className={styles.bio}>{user.description || "Нет описания"}</p>

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

            </div>
        </Link>
    );
};


function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Поиск студентов..."
            value={searchTerm}
            onChange={handleChange}
        />
    );
}

export {StudentCard, SearchBar};