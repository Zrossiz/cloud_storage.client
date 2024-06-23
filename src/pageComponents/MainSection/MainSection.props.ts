import { IFileObj } from "@/types";

export interface MainSectionProps {
    files: IFileObj[] | { message: string };
}