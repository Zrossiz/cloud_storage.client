import { Input } from '@/elements';
import styles from './CreateFolder.module.scss';
import { CreateFolderProps } from './CreateFolder.props';
import { useState } from 'react';

export const CreateFolder = ({ setOpen }: CreateFolderProps) => {
    const [input, setInput] = useState<string>("");
    return (
        <div className={styles.wrapper}>
            <div className={styles.bg} onClick={() => setOpen(false)}></div>
            <div className={styles.form}>
                <div className={styles.titleWrapper}>Создать папку</div>
                <div className={styles.input}>
                    <Input type='text' value={input} onChange={setInput} placeholder='Введите название папки' />
                </div>
                <div className={styles.btn}>
                    Создать
                </div> 
            </div>
        </div>
    )
}