import { uploadFile } from '@/api';
import styles from './Sidebar.module.scss';
import cn from 'classnames';
import { useRouter } from 'next/router';

export const Sidebar = () => {
    const router = useRouter();

    const upload = async (event: any) => {
        const path: string = window.location.href.split('path=')[1];
        const response = await uploadFile(path, event.target.files[0]);
        if ("message" in response && response.message === "Unauthorized") {
            router.push('/login')
        };
        window.location.reload();
    }
    return (
        <div className={styles.wrapper}>
            <input 
                className={cn(styles.btn, styles.upload)} 
                type='file' 
                onChange={upload}
            />
            <div className={cn(styles.btn, styles.create)}>Создать папку</div>
        </div>
    )
}