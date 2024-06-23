import { IFileObj } from ".";

export interface MainPageProps {
    files: IFileObj[] | { message: string }
}