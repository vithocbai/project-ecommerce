import axiosClient from './axiosClient'

const getProduct = async (query) => {
    const { sortType, page, limit } = query
    const queryLimit = limit === 'all' ? ' ' : limit

    const res = await axiosClient.get(
        `./product?sortType=${sortType}&page=${page}&limit=${queryLimit}`
    )
    return res.data
}

export default getProduct
