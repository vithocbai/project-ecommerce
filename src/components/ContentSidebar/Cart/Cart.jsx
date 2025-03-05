import Button from '@components/Button/Button'
import HeaderSidebar from '../components/HeaderSidebar/HeaderSidebar'
import { BsCartCheck } from 'react-icons/bs'
import ProductItem from '../components/ProductItem/ProductItem'
import styles from './styles.module.scss'
function Cart({ isCart }) {
    const { container, total, groupBtn } = styles

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

                <ProductItem isCart={true}/>
            </div>
            <div>
                <div className={total}>
                    <p className="title">SUBTOTAL:</p>
                    <span>$119.99</span>
                </div>
                <div className={groupBtn}>
                    <Button content={'VIEW CART'} primary/>
                    <Button content={'CHECKOUT'} />
                </div>
            </div>
        </div>
    )
}

export default Cart
