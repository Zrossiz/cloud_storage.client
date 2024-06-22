export interface InputProps {
    type: 'text' | 'email' | 'password';
    value: string | number;
    onChange: (arg0: any) => void;
    placeholder: string;
}