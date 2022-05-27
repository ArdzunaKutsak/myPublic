import { baseAPI } from "./baseAPI";

export const getUsers = async () => {
    const resp = await baseAPI.get('/users')
    console.log(resp)
} 