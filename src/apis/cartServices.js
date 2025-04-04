import axiosClient from './axiosClient'

const addProductCart = async (data) => {
    return await axiosClient.post('/cart', data)
}

const getCart = async (userId) => {
    return await axiosClient.get(`/cart/${userId}`)
}

const deleteCart = async (data) => {
    return await axiosClient.delete('/cart/deleteItem', { data })
}

const deleteAllCart = async (data) => {
    return await axiosClient.delete('/cart/delete', { data })
}

export { addProductCart, getCart, deleteCart, deleteAllCart }
