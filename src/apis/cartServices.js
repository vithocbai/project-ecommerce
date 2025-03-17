import axiosClient from './axiosClient'

const addProductCart = async (data) => {
    return await axiosClient.post('/cart', data)
}

const getCart = async (userId) => {
    return await axiosClient.get(`/cart/${userId}`)
}

const deleteCart = async (data) => {
    return await axiosClient.delete('/cart/deleteItem', {data})
}

export { addProductCart, getCart, deleteCart }
