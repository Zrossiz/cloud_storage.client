import { IFileObj } from "@/types/File";
import axios from "axios";

export const getFilesByPath = async (path: string = "/", cookies?: string): Promise<IFileObj[] | { message: string }> => {
    try {
      const formData = new FormData();
      formData.append('path', path);
  
      const headers: Record<string, string> = {};
      if (cookies) {
        headers.Cookie = cookies;
      }
  
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}file/get/?path=${path}`, {
        withCredentials: true,
        headers
      });
  
      return response.data.data;
    } catch (err: any) {
      console.error("Error: ", err);
      if (err.response && err.response.status === 401) {
        return { message: "Unauthorized" };
      }
      return { message: "Internal server error" };
    }
};

export const uploadFile = async (path: string = "/", file: File): Promise<IFileObj[] | { message: string }> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('path', path);

    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}file/upload-file/`, formData, {
      withCredentials: true,
    });

    return response.data.data;
  } catch (err: any) {
    console.error("Error: ", err);
    if (err.response && err.response.status === 401) {
      return { message: "Unauthorized" };
    }
    return { message: "Internal server error" };
  }
}

export const createFolder = async (path: string = "/", name: string): Promise<{ success: boolean } | { message: string }> => {
  try {
    const formData = new FormData();
    formData.append("path", path + name);

    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}file/create-folder/`, formData, {
      withCredentials: true
    });

    return {
      success: true
    }
  } catch (err: any) {
    console.error("Error: ", err);
    if (err.response && err.response.status === 401) {
      return { message: "Unauthorized" };
    }
    return { message: "Internal server error" };
  }
}