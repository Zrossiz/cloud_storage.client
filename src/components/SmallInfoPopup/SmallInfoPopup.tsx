import { AnimatePresence, motion } from 'framer-motion';
import styles from './SmallInfoPopup.module.scss';
import { SmallInfoPopupProps } from './SmallInfoPopup.props';
import cn from 'classnames';

export const SmallInfoPopup = ({success, message}: SmallInfoPopupProps) => {
    return (
        <motion.div 
            className={cn(styles.wrapper, {
                [styles.green]: success,
                [styles.red]: !success
            })}
            initial={{ x: 100 }}
            exit={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2 }}
        >
            {message}
        </motion.div>
    )
}