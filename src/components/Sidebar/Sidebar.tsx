import { uploadFile } from '@/api';
import styles from './Sidebar.module.scss';
import cn from 'classnames';

export const Sidebar = () => {

    const upload = async (event: any) => {
        const path: string = window.location.href.split('path=')[1];
        const response = await uploadFile(path, event.target.files[0]);
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