import MainLayout from '@components/Layout/Layout'
import styles from '../../styles.module.scss'
import CartTable from './CartTable'
import CartSummary from './CartSummary'
import SafeCheckout from './SafeCheckOut'
import Button from '@components/Button/Button'
import { FaRegTrashCan } from 'react-icons/fa6'
import { useContext } from 'react'
import { SideBarContext } from '@/context/SideBarProvider'
import { addProductCart, deleteCart, deleteAllCart } from '@/apis/cartServices'
import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function Contents() {
    const {
        containerContent,
        contentLeft,
        contentRight,
        coupon,
        couponSearch,
        couponClear,
        boxCartEmty,
        heading,
        desc,
        actBtn
    } = styles

    const { listProductCart, handGetListProductsCart, userId } =
        useContext(SideBarContext)
    const navigate = useNavigate()

    const handleRepalceQuantity = (data) => {
        addProductCart(data)
            .then((res) => {
                handGetListProductsCart(data.userId, 'cart')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleDeteleCart = (data) => {
        deleteCart(data)
            .then((res) => handGetListProductsCart(data.userId, 'cart'))
            .catch((err) => {
                console.log(err)
            })
    }

    const handleDeteleAllCart = () => {
        deleteAllCart({ userId })
            .then((res) => handGetListProductsCart(userId, 'cart'))
            .catch((err) => {
                console.log(err)
            })
    }

    const handleNavigation = () => {
        navigate('/shop')

    }

   

    return (
        <>
            <MainLayout>
                {listProductCart.length > 0 ? (
                    <div className={containerContent}>
                        <div className={contentLeft}>
                            <CartTable
                                listProductCart={listProductCart}
                                getData={handleRepalceQuantity}
                                getDeleteData={handleDeteleCart}
                            />
                            <div className={coupon}>
                                <div className={couponSearch}>
                                    <input
                                        type="text"
                                        placeholder="Coupon code"
                                    />
                                    <input type="submit" value="OK" />
                                </div>
                                <div
                                    className={couponClear}
                                    onClick={() => handleDeteleAllCart()}
                                >
                                    <Button
                                        content={
                                            <div>
                                                <FaRegTrashCan />{' '}
                                                {'Clear shopping cart'}
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={contentRight}>
                            <CartSummary />
                            <SafeCheckout />
                        </div>
                    </div>
                ) : (
                    <div className={boxCartEmty}>
                        <div style={{ fontSize: '40px', color: '#5b5b5b'}}>
                            <BsCart3 />
                        </div>
                        <h2 className={heading}>YOUR SHOPPING CART IS EMPTY</h2>
                        <p className={desc}>
                            We invite you to get acquainted with an assortment
                            of our shop. Surely you can find something for
                            yourself!
                        </p>
                        <div className={actBtn} onClick={handleNavigation}>
                            <Button content="RETURN TO SHOP" primary={true} />
                        </div>
                    </div>
                )}
            </MainLayout>
        </>
    )
}

export default Contents
