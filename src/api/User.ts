import axios, { AxiosError } from "axios"

export const registrationUser = async (
    name: string,
    email: string,
    password: string,
): Promise<boolean | { message: string }> => {
    try {
        const userResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}user/register/`, {
            name,
            email, 
            password
        }, {
            withCredentials: true
        });
        if (userResponse.status === 201) {
            return true;
        };

        return {
            message: userResponse.data
        }
    } catch (err: any) {
        console.log(err);
        return {
            message: "Internal"
        }
    }
}

export const loginUser = async (
    name: string, password: string
): Promise<boolean | { message: string }> => {
    try {
        const loginResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}user/login/`, {
            name,
            password
        }, {
            withCredentials: true
        });
        return true;
    } catch (err: any) {
        console.log(err);
        return {
            message: "Internal"
        }
    }
}