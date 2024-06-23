import { Sidebar } from '@/components';
import styles from './MainSection.module.scss';

export const MainSection = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebar}><Sidebar /></div>
            <div>content</div>
        </div>
    )
}