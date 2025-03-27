import { addProductCart } from "@/apis/cartServices"


export const handleAddProductToCart = (
    setIsOpen,
    setType,
    toast,
    isChooseSize,
    userId,
    productId,
    quantity,
    setIsLoading,
    handGetListProductsCart
) => {
    if (!userId) {
        setIsOpen(true)
        setType('login')
        toast.warning('Bạn cần đăng nhập')
        return
    }

    if (!isChooseSize) {
        toast.warning('Bạn cần chọn Size')
        return
    }

    const data = {
        userId,
        productId,
        quantity,
        size: isChooseSize
    }

    setIsLoading(true)
    addProductCart(data)
        .then((res) => {
            setIsOpen(true)
            setType('cart')
            toast.success('Add Product to cart successfully')
            setIsLoading(false)
            if (userId) {
                handGetListProductsCart(userId, 'cart')
            }
        })
        .catch((err) => {
            console.log(err)
            setIsLoading(false)
        })
}
