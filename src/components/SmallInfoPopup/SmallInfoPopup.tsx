import styles from './SmallInfoPopup.module.scss';
import { SmallInfoPopupProps } from './SmallInfoPopup.props';
import cn from 'classnames';

export const SmallInfoPopup = ({success, message}: SmallInfoPopupProps) => {
    return (
        <div className={cn(styles.wrapper, {
            [styles.green]: success,
            [styles.red]: !success
        })}>
            {message}
        </div>
    )
}