import styles from './LoginForm.module.scss';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SmallInfoPopup } from '@/components';
import { Input } from '@/elements';
import Link from 'next/link';
import cn from 'classnames';
import { loginUser } from '@/api';

export const LoginForm = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [info, setInfo] = useState<boolean>(false);
    const [successRegistration, setSuccessRegistration] = useState<boolean>(true);
    const router = useRouter();

    const login = async () => {
        if (error) {
            setError("");
        };

        const result: boolean | { message: string } = await loginUser(username, password);
        setInfo(true);
        setTimeout(() => {
            setInfo(false);
        }, 2000);
        if (result === true) {
            setSuccessRegistration(true);
            setTimeout(() => {
                return router.push('/');
            }, 2000);
        } else if (typeof result === 'object' && 'message' in result) {
            setSuccessRegistration(false);
            setError(result.message);
        } else {
            setError("An unknown error occurred.");
        };
    }

    return (
        <div className={styles.formWrapper}>
            <AnimatePresence>
                {info && 
                    <SmallInfoPopup 
                        success={successRegistration} 
                        message={successRegistration ? "Успешная авторизация" : "Ошибка при авторизации"} 
                    />
                }
            </AnimatePresence>
            <div className={styles.titleWrapper}>
                Cloud storage
            </div>
            <div className={styles.inputsWrapper}>
                <Input 
                    value={username} 
                    placeholder='Введите имя пользователя'
                    onChange={setUsername}
                    type='text'
                />
                <Input 
                    value={password} 
                    placeholder='Введите пароль'
                    type='password'
                    onChange={setPassword}
                />
                {error && (
                    <div className={styles.error}>{error}</div>
                )}
            </div>
            <div className={styles.btnWrapper}>
                <button
                    onClick={login}
                    className={styles.btn} 
                    disabled={username && password ? false : true}
                >
                    Войти
                </button>
            </div>
            <div className={styles.loginWrapper}>
                <Link href="/sign-up" className={cn(styles.btn, styles.registration)}>Зарегистрироваться</Link>
            </div>
        </div>
    )
}