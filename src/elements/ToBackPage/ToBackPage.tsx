import styles from './ToBackPage.module.scss';
import { ToBackPageProps } from "./ToBackPage.props";

export const ToBackPage = ({router}: ToBackPageProps) => {

    return (
        <div 
            className={styles.btn}
            onClick={() => router.back()}
        >
            <div className={styles.sign}>&lt;</div>
        </div>
    )
}