import { Input } from '@/elements';
import styles from './RegistrationForm.module.scss'; 
import { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';

export const RegistrationForm = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    return (
        <div className={styles.formWrapper}>
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
            </div>
            <div className={styles.btnWrapper}>
                <button 
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