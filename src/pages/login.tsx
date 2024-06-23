import { LoginForm } from '@/pageComponents';
import styles from '../styles/Login.module.scss';
import Head from 'next/head';
import Image from 'next/image';

const LoginPage = () => {
    return (
        <>
            <Head>
                <title>Cloud storage</title>
                <link rel="icon" type='image/x-icon' href="/Logo.png" />
            </Head> 
            <div className={styles.pageWrapper}>
                <div className={styles.background}>
                    <Image src='/Background.jpg' fill alt="Background" />
                </div>
                <div className={styles.formWrapper}>
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default LoginPage;