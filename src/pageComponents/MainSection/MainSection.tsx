import { Sidebar } from '@/components';
import styles from './MainSection.module.scss';
import { IFileObj } from '@/types/File';
import Link from 'next/link';
import Image from 'next/image';

export const MainSection = () => {
    const arr: IFileObj[] = [];
    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebar}><Sidebar /></div>
            <div className={styles.content}>
                {arr.map((item) => {
                    return (
                        <Link href="/" className={styles.item}>
                            <Image 
                                src={item.type === 'folder' ? '/Folder.svg' : '/Document.svg'} 
                                width={106}
                                height={100}
                                alt={item.name}  
                            />
                            <div className={styles.name}>{item.name}</div>  
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}