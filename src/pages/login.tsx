import { LoginForm } from '@/pageComponents';
import styles from '../styles/Login.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '@/Layout/Layout';

const LoginPage = () => {
    return (
        <Layout>
            <div className={styles.pageWrapper}>
                <div className={styles.background}>
                    <Image src='/Background.jpg' fill alt="Background" />
                </div>
                <div className={styles.formWrapper}>
                    <LoginForm />
                </div>
            </div>
        </Layout>
    )
}

export default LoginPage;