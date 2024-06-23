import { IFileObj } from "@/types/File";
import axios from "axios";

export const getFilesByPath = async (path: string): Promise<IFileObj[] | { message: string }> => {
    const formData = new FormData();
    formData.append('path', path);

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}file/get/`);
    if (response.status === 200) {
        return response.data
    };
    if (response.status === 401) {
        return { message: "Unauthorized" }
    };
    return { message: "Internal server error" }
};