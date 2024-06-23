import { RegistrationForm } from '@/pageComponents';
import styles from '../styles/SignUp.module.scss';
import Image from 'next/image';
import Head from 'next/head';
import { Layout } from '@/Layout/Layout';

const SignUpPage = () => {
    return (
        <Layout>
            <div className={styles.pageWrapper}>
                <div className={styles.background}>
                    <Image src='/Background.jpg' fill alt="Background" />
                </div>
                <div className={styles.formWrapper}>
                    <RegistrationForm />
                </div>
            </div>
        </Layout>
    )
};

export default SignUpPage;