import { TfiReload } from 'react-icons/tfi'
import HeaderSidebar from '../components/HeaderSidebar/HeaderSidebar'
import ProductItem from '../components/ProductItem/ProductItem'
import Button from '@components/Button/Button'
import styles from './styles.module.scss'
import { useContext } from 'react'
import { SideBarContext } from '@/context/SideBarProvider'
import Cookies from 'js-cookie'

function Compare() {
    const { container } = styles
    const { compareList, setCompareList } = useContext(SideBarContext)
    const userId = Cookies.get('userId')
    
    return (
        <div className={container}>
            <div>
                <HeaderSidebar
                    icons={
                        <TfiReload
                            style={{ fontSize: '23px', marginBottom: '10px' }}
                        />
                    }
                    title={'COMPARE'}
                />

                {/* ✅ Duyệt qua danh sách compareList */}
                {compareList.length > 0 ? (
                    compareList.map((item, index) => (
                        <ProductItem
                            key={index}
                            isCart={false} // Không phải Cart
                            thumbProduct={item.images[0]}
                            titleProduct={item.name}
                            priceProduct={item.price}
                            quantityProduct={item.quantity}
                            productId={userId}
                        />
                    ))
                ) : (
                    <p style={{ textAlign: 'center', padding: '20px' }}>
                        No products in compare list.
                    </p>
                )}
            </div>

            {/* Nút View Compare */}
            <div style={{ height: '43px' }}>
                <Button content="VIEW COMPARE" primary />
            </div>
        </div>
    )
}

export default Compare
