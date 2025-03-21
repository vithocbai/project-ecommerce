import { useContext } from 'react'
import { SideBarContext } from '@/context/SideBarProvider'
import SliderScroll from '@components/SliderScroll/SliderScroll'

function Details() {
    const { detailProduct } = useContext(SideBarContext)
    return <div><SliderScroll data={detailProduct.images}/></div>
}

export default Details
