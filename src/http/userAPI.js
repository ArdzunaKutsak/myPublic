import { baseAPI } from "./baseAPI";

export const getUsers = async () => {
    const resp = await baseAPI.get('/users')
    return resp
} 
export const getOneUser = async (id) => {
    const resp = await baseAPI.get('/users/' + id)
    return resp
} 
export const getPosts = async (userId) => {
    const resp = await baseAPI.get('/posts/',{params:{userId}})
    return resp
} 
export const getOnePost = async (id) => {
    const resp = await baseAPI.get('/posts/',{params:{id}})
    return resp
} 

export const getComments = async (postId) => {
    const resp = await baseAPI.get('/comments/', {params:{postId}})
    return resp
}

export const sendComment = async ({name, email, body}) => {
    const resp = await baseAPI.post('/posts', {name, email, body})
    console.log(resp)
    return resp
}