import Link from "next/link";
import Image from "next/image";
import styles from './ObjectItem.module.scss';
import { ObjectItemProps } from "./ObjectItem.props";

export const ObjectItem = ({ obj }: ObjectItemProps) => {
    const itemLink = obj.type === 'file' ? obj.link : window.location.href + obj.name;
    return (
        <Link href={itemLink} className={styles.item}>
            <Image 
                src={obj.type === 'folder' ? '/Folder.svg' : '/Document.svg'} 
                width={106}
                height={100}
                alt={obj.name}  
            />
            <div className={styles.name}>{obj.name.replace(/\//g, '')}</div>  
        </Link>
    )
}