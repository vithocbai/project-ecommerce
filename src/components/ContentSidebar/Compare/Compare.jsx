import { TfiReload } from 'react-icons/tfi'
import HeaderSidebar from '../components/HeaderSidebar/HeaderSidebar'
import ProductItem from '../components/ProductItem/ProductItem'
import Button from '@components/Button/Button'
import styles from './styles.module.scss'

function Compare() {
    const {container} = styles;
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
                <ProductItem isCart={false}/>
            </div>
            <div>
                <Button content="VIEW COMPARE" />
            </div>
        </div>
    )
}

export default Compare
