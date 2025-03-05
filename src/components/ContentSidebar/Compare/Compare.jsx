import { TfiReload } from 'react-icons/tfi'
import HeaderSidebar from '../components/HeaderSidebar/HeaderSidebar'
import ProductItem from '../components/ProductItem/ProductItem'

function Compare() {
    return (
        <div>
            <HeaderSidebar
                icons={<TfiReload style={{ fontSize: '23px', marginBottom: '10px' }} />}
                title={'COMPARE'}
            />
            <ProductItem />
        </div>
        
    )
}

export default Compare
