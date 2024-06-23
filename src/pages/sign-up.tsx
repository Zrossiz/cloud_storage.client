import { RegistrationForm } from '@/pageComponents';
import styles from '../styles/SignUp.module.scss';
import Image from 'next/image';
import Head from 'next/head';

const SignUpPage = () => {
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
                    <RegistrationForm />
                </div>
            </div>
        </>
    )
};

export default SignUpPage;