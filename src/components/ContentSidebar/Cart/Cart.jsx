import Button from '@components/Button/Button'
import HeaderSidebar from '../components/HeaderSidebar/HeaderSidebar'
import { BsCartCheck } from 'react-icons/bs'
import ProductItem from '../components/ProductItem/ProductItem'
import styles from './styles.module.scss'
import { useContext } from 'react'
import { SideBarContext } from '@/context/SideBarProvider'
import { useNavigate } from 'react-router-dom'

function Cart({ isCart }) {
    const {
        container,
        total,
        groupBtn,
        actBtn,
        infoCart,
        returnShop,
        desc
    } = styles

    const { listProductCart, setIsOpen } = useContext(SideBarContext)
    const navigate = useNavigate()

    const handleNavigateOurShop = () => {
        navigate('/shop')
        setIsOpen(false)
    }

    const handleNavigateCart = () => {
        navigate('/cart')
        setIsOpen(false)
    }

    const subTotal = listProductCart.reduce((total, item) => {
        return total + item.total
    }, 0)

    return (
        <div className={container}>
            <div>
                <HeaderSidebar
                    icons={
                        <BsCartCheck
                            style={{ fontSize: '24px', marginBottom: '10px' }}
                        />
                    }
                    title={'CART'}
                />
                {listProductCart.map((item, index) => {
                    return (
                        <ProductItem
                            key={index}
                            isCart={false}
                            thumbProduct={item.images[0]}
                            titleProduct={item.name}
                            priceProduct={item.price}
                            sizeProduct={item.size}
                            quantityProduct={item.quantity}
                            skuProduct={item.sku}
                            userId={item.userId}
                            productId={item.productId}
                        />
                    )
                })}
            </div>
            {listProductCart.length ? (
                <div>
                    <div className={total}>
                        <p className="title">SUBTOTAL:</p>
                        <span>${subTotal.toFixed(2)}</span>
                    </div>
                    <div className={groupBtn}>
                        <div
                            className={actBtn}
                            onClick={() => handleNavigateCart()}
                        >
                            <Button content={'VIEW CART'} primary />
                        </div>
                        <div className={actBtn}>
                            <Button content={'CHECKOUT'} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={infoCart}>
                    <p className={desc}>Không có sản phẩm trong giỏ hàng.</p>
                    <div
                        className={returnShop}
                        onClick={() => handleNavigateOurShop()}
                    >
                        <Button content="RETURN TO SHOP" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart
