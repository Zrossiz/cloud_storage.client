import styles from './Sidebar.module.scss';
import cn from 'classnames';

export const Sidebar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={cn(styles.btn, styles.upload)}>Загрузить</div>
            <div className={cn(styles.btn, styles.create)}>Создать папку</div>
        </div>
    )
}