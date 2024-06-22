import styles from '../styles/SignUp.module.scss';
import Image from 'next/image';

const SignUpPage = () => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.background}>
                <Image src='/Background.jpg' fill alt="Background" />
            </div>
            <div className={styles.formWrapper}>
                Форма
            </div>
        </div>
    )
};

export default SignUpPage;