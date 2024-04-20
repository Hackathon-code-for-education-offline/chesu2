import React, { useEffect, useState } from 'react';
import {login, register} from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
import {AuthForm} from "../components/auth_form/AuthForm";
import styles from "../components/auth_form/AuthForm.module.css";
import {Input} from "../components/generic/input/Input";
import {Button, TransparentButton} from "../components/generic/button/Button";
import useInput from "../hooks/useInput";

const Login = () => {
    const navigate = useNavigate();
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/');
        }
    }, []);

    const usernameInput = useInput("");
    const emailInput = useInput("");
    const passwordInput = useInput("");
    const passwordInput2 = useInput("");


    const resetForm = () => {
        // usernameInput.setValue('');
        // emailInput.setValue('');
        // passwordInput.setValue('');
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const { error } = await login(usernameInput.value, passwordInput.value);
        if (error) {
            alert(error);
        } else {
            navigate('/');
            resetForm();
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const { error } = await register(usernameInput.value, emailInput.value, passwordInput.value, passwordInput2.value);
        if (error) {
            alert(JSON.stringify(error));
        } else {
            navigate('/');
            resetForm();
        }
    };


    const [isSignIn, setIsSignIn] = useState(false);

    let containerClasses = styles.container;
    if (!isSignIn){
        containerClasses += ` ${styles.active}`;
    }

    return (
        <>
            <div className={containerClasses}>

                <div className={`${styles.formContainer} ${styles.signUp}`}>
                    <form onSubmit={handleRegister}>
                        <h1>Создать Аккаунт</h1>

                        <Input type={'text'} placeholder={'Имя пользователя'} id={'username'} name={'username'} {...usernameInput}></Input>
                        <Input type={'email'} placeholder={'Электронный адрес почты'} id={'email'} name={'email'}{...emailInput}></Input>
                        <Input type={'password'} placeholder={'Пароль'} id={'password'} name={'password'} {...passwordInput}></Input>
                        <Input type={'password2'} placeholder={'Подтвердите пароль'} id={'password2'} name={'password2'} {...passwordInput2}></Input>
                        <Button type={'submit'}>Зарегистрироваться</Button>
                    </form>
                </div>

                <div className={`${styles.formContainer} ${styles.signIn}`}>
                    <form  onSubmit={handleLogin}>
                        <h1>Войти</h1>
                        <Input type={'text'} placeholder={'Имя пользователя'} id={'username'} name={'username'} {...usernameInput}></Input>
                        <Input type={'password'} placeholder={'Пароль'} id={'password'} name={'password'} {...passwordInput}></Input>
                        <a href={'#'}>Forget Your Password?</a>
                        <Button type={'submit'}>Войти</Button>
                    </form>
                </div>


                <div className={styles.toggleContainer}>
                    <div className={styles.toggle}>

                        <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
                            <h1>Добро пожаловать!</h1>
                            <p>Введите свои личные данные, чтобы использовать все возможности сайта.</p>
                            <TransparentButton id="login" reverse={true} onClick={() => setIsSignIn(true)}>Войти</TransparentButton>
                        </div>

                        <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
                            <h1>Привет, друг!</h1>
                            <p>Зарегистрируйтесь, указав свои личные данные, чтобы использовать все функции сайта.</p>
                            <TransparentButton id="register" reverse={true} onClick={() => setIsSignIn(false)}>Зарегистрироваться</TransparentButton>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Login;
