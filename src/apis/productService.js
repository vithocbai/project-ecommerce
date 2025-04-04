import axiosClient from './axiosClient'

const getProduct = async (query) => {
    const { sortType, page, limit } = query
    const queryLimit = limit === 'all' ? ' ' : limit

    const res = await axiosClient.get(
        `./product?sortType=${sortType}&page=${page}&limit=${queryLimit}`
    )
    return res.data
}

const getDetailProduct = async (id) => {
    try {
        const res = await axiosClient.get(`/product/${id}`)
        if (!res.data) {
            throw new Error('Product not found')
        }
        return res.data
    } catch (error) {
        console.error(error)
        throw error
    }
}


const getRealatedProduct = async (id) => {
    const res = await axiosClient.get(`/related-products/${id}`)
    if (res.data) return res.data.relatedProducts
    return []
}

export { getProduct, getDetailProduct, getRealatedProduct }
