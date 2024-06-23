import { ObjectItem, Sidebar, SmallInfoPopup } from '@/components';
import styles from './MainSection.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { MainSectionProps } from './MainSection.props';
import { IFileObj } from '@/types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export const MainSection = ({ files }: MainSectionProps) => {
    const [filesState, setFilesState] = useState<IFileObj[]>([]);
    const [info, setInfo] = useState<boolean>(false);
    const router = useRouter();
    useEffect(() => {
        if (Array.isArray(files)) {
            setFilesState(files);
        } else if (files && 'message' in files && files.message === 'Unauthorized') {
            router.push('/login');
        } else {
            setInfo(true);
        }
    }, [files, router]);
    return (
        <div className={styles.wrapper}>
            <AnimatePresence>
                {info && <SmallInfoPopup success={false} message='Ошибка при получении файлов' />}
            </AnimatePresence>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                {filesState.map((item) => {
                    return (
                        <ObjectItem obj={item} />
                    );
                })}
            </div>
        </div>
    )
}