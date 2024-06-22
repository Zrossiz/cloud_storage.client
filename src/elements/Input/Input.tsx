import { InputProps } from "./Input.props";
import styles from './Input.module.scss';

export const Input = ({ type, value, placeholder, onChange }: InputProps) => {
    return (
        <>
            {type === 'email' && (
                <input 
                    className={styles.input}
                    value={value} 
                    onChange={(e) => onChange(e.target.value)} 
                    placeholder={placeholder}
                    type="email"
                />
            )}
            {type === 'text' && (
                <input 
                    className={styles.input}
                    value={value} 
                    onChange={(e) => onChange(e.target.value)} 
                    placeholder={placeholder}
                    type="text"
                />
            )}
            {type === 'password' && (
                <input 
                    className={styles.input}
                    value={value} 
                    onChange={(e) => onChange(e.target.value)} 
                    placeholder={placeholder}
                    type="password"
                />
            )}
        </>
    )
}