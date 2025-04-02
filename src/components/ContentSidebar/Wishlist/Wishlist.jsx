import ProductItem from '../components/ProductItem/ProductItem'
import HeaderSidebar from '../components/HeaderSidebar/HeaderSidebar'
import { CiHeart } from 'react-icons/ci'
import Button from '@components/Button/Button'
import styles from './styles.module.scss'
import { useContext } from 'react'
import { SideBarContext } from '@/context/SideBarProvider'
import Cookies from 'js-cookie'

function Wishlist() {
    const { container, groupBtn } = styles
    const { wishList, setWishList } = useContext(SideBarContext)
    const userId = Cookies.get('userId')
    console.log(wishList)
    return (
        <div className={container}>
            <div>
                <HeaderSidebar
                    icons={
                        <CiHeart
                            style={{ fontSize: '30px', marginBottom: '10px' }}
                        />
                    }
                    title={'WISHLIST'}
                />
                {/* ✅ Duyệt qua danh sách WishList */}
                {wishList.length > 0 ? (
                    wishList.map((item, index) => (
                        <ProductItem
                            key={index}
                            isCart={false}
                            thumbProduct={item.images[0]}
                            titleProduct={item.name}
                            priceProduct={item.price}
                            productId={userId}
                        />
                    ))
                ) : (
                    <p style={{ textAlign: 'center', padding: '20px' }}>
                        No products in compare list.
                    </p>
                )}
            </div>
            <div className={groupBtn}>
                <Button content="VIEW WISHLIST" />
                <Button content="ADD ALL TO CART" />
            </div>
        </div>
    )
}

export default Wishlist
