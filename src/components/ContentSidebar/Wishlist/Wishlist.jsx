import ProductItem from '../components/ProductItem/ProductItem'
import HeaderSidebar from '../components/HeaderSidebar/HeaderSidebar'
import { CiHeart } from 'react-icons/ci'
import Button from '@components/Button/Button'
import styles from './styles.module.scss'

function Wishlist() {
    const {container, groupBtn} = styles
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
                <ProductItem isCart={false}/>
            </div>
            <div className={groupBtn}>
                <Button content="VIEW WISHLIST"/>
                <Button content="ADD ALL TO CART"/>
            </div>
        </div>
    )
}

export default Wishlist
