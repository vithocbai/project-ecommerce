import Button from '@components/Button/Button'
import styles from './styles.module.scss'
import { IoCloseOutline } from 'react-icons/io5'
import { deleteCart } from '@/apis/cartServices'
import { useContext } from 'react'
import { SideBarContext } from '@/context/SideBarProvider'
import { useState } from 'react'
import { VscLoading } from 'react-icons/vsc'

function ProductItem({
    isCart,
    thumbProduct,
    titleProduct,
    sizeProduct,
    quantityProduct,
    priceProduct,
    skuProduct,
    userId,
    productId
}) {
    const {
        container,
        image,
        titleLink,
        selectQutity,
        price,
        close,
        codeProduct,
        size,
        loading
    } = styles

    const { handGetListProductsCart} = useContext(SideBarContext)
    const [isDelete, setIsDelete] = useState(false)
    const [isFading, setIsFading] = useState(false)

    const handleDeleteProductCart = () => {
        setIsFading(true)
        setTimeout(() => {
            setIsDelete(true)
            deleteCart({ userId, productId })
                .then((res) => {
                    handGetListProductsCart(userId, 'cart')
                    setTimeout(() => {
                        setIsDelete(false)
                        setIsFading(false)
                    }, 1000)
                })
                .catch((err) => {
                    console.log(err)
                    setTimeout(() => {
                        setIsDelete(false)
                        setIsFading(false)
                    }, 1000)
                })
        }, 500)
    }

    return (
        <div
            className={container}
            style={{
                opacity: isFading ? 0.5 : 1,
                transition: 'opacity 0.3s ease'
            }}
        >
            <a href="">
                <img className={image} src={thumbProduct} alt="" />
            </a>
            <div>
                <h4>
                    <a href="" className={titleLink}>
                        {titleProduct}
                    </a>
                </h4>
                <div className={size} style={{ marginTop: '4px' }}>
                    Size: {sizeProduct}
                </div>
                {isCart && (
                    <select name="" id="" className={selectQutity}>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">6</option>
                        <option value="">7</option>
                    </select>
                )}

                <span className={price}>
                    {isCart && <span> x </span>}
                    {quantityProduct} x ${priceProduct}
                </span>
                <span className={codeProduct}>{skuProduct}</span>
            </div>
            <div className={close} onClick={handleDeleteProductCart}>
                <IoCloseOutline style={{ fontSize: '22px' }} />
            </div>
            {isDelete ? (
                <div className={loading}>
                    <VscLoading style={{ fontSize: '28px' }} />
                </div>
            ) : (
                ''
            )}
        </div>
    )
}

export default ProductItem
