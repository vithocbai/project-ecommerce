import Button from '@components/Button/Button'
import HeaderSidebar from '../components/HeaderSidebar/HeaderSidebar'
import { BsCartCheck } from 'react-icons/bs'
import ProductItem from '../components/ProductItem/ProductItem'
import styles from './styles.module.scss'
import { useContext } from 'react'
import { SideBarContext } from '@/context/SideBarProvider'

function Cart({ isCart }) {
    const { container, total, groupBtn } = styles
    const { listProductCart } = useContext(SideBarContext)
    console.log(listProductCart)
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
                {listProductCart.map((item) => {
                    return (
                        <ProductItem
                            isCart={false}
                            thumbProduct={item.images[0]}
                            titleProduct={item.name}
                            priceProduct={item.price}
                            sizeProduct={item.size}
                            quantityProduct={item.quantity}
                            skuProduct={item.sku}
                        />
                    )
                })}
            </div>
            <div>
                <div className={total}>
                    <p className="title">SUBTOTAL:</p>
                    <span>$119.99</span>
                </div>
                
                <div className={groupBtn}>
                    <Button content={'VIEW CART'} primary />
                    <Button content={'CHECKOUT'} />
                </div>
            </div>
        </div>
    )
}

export default Cart
