import axiosClient from './axiosClient'

const addProductCart = async (data) => {
    return await axiosClient.post('/cart', data)
}

const getCart = async (userId) => {
    console.log(userId)
    return await axiosClient.get(`/cart/${userId}`)
}

export { addProductCart, getCart }
