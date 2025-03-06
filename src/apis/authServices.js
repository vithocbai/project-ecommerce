import axiosClient from "./axiosClient"

const register = async (body) => {
    return axiosClient.post('./register', body)
}

export default register
