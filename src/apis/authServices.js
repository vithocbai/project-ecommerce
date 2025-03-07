import axiosClient from './axiosClient'

const register = async (body) => {
    return await axiosClient.post('/register', body)
}

const login = async (body) => {
    return await axiosClient.post('/login', body)
}

const getInfo = async () => {
    return await axiosClient.get('/user/info/4064ad2d-1741-4686-b8ce-2eefa299f82a')
}

export { register, login, getInfo }
