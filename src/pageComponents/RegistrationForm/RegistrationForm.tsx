import { Input } from '@/elements';
import styles from './RegistrationForm.module.scss'; 
import { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { registrationUser } from '@/api';
import { useRouter } from 'next/router';
import { SmallInfoPopup } from '@/components';

export const RegistrationForm = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [info, setInfo] = useState<boolean>(true);
    const router = useRouter();


    const registration = async () => {
        if (error) {
            setError("");
        };

        const result: boolean | { message: string } = await registrationUser(username, email, password);
        if (result === true) {
            setInfo(true);
            return router.push('/');
        } else if (typeof result === 'object' && 'message' in result) {
            setError(result.message);
        } else {
            setError("An unknown error occurred.");
        };
    }

    return (
        <div className={styles.formWrapper}>
            {info && <SmallInfoPopup success={true} message={"Успешный логин"} />}
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
                    value={email}  
                    placeholder='Введите email'
                    type='email'
                    onChange={setEmail}
                />
                <Input 
                    value={password} 
                    placeholder='Введите пароль'
                    type='password'
                    onChange={setPassword}
                />
                {error && (
                    <div>{error}</div>
                )}
            </div>
            <div className={styles.btnWrapper}>
                <button
                    onClick={registration}
                    className={styles.btn} 
                    disabled={username && password && email ? false : true}
                >
                    Регистрация
                </button>
            </div>
            <div className={styles.loginWrapper}>
                <Link href="/login" className={cn(styles.btn, styles.login)}>Авторизоваться</Link>
            </div>
        </div>
    )
}