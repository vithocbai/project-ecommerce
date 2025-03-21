import { useContext } from 'react'
import { SideBarContext } from '@/context/SideBarProvider'
import SliderScroll from '@components/SliderScroll/SliderScroll'
import styles from './styles.module.scss'
import SelectBox from '@/pages/OurShop/components/SelectBox'
import Button from '@components/Button/Button'
import { BsCart3 } from 'react-icons/bs'
import { TfiReload } from 'react-icons/tfi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaVk } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";
import { VscMail } from "react-icons/vsc";
import { RiLinkedinFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";


function Details() {
    const { detailProduct } = useContext(SideBarContext)
    const {
        containerDetails,
        title,
        price,
        desc,
        sizeBox,
        sizeProduct,
        addToCart,
        actBtn,
        quantitySelect,
        separate,
        boxOrtherAdd,
        boxDesc
    } = styles

    const showOption = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' }
    ]

    return (
        <div className={containerDetails}>
            <SliderScroll data={detailProduct.images} />
            <div className={title}>{detailProduct.name}</div>
            <div className={price}>${detailProduct.price}</div>
            <div className={desc}>{detailProduct.description}</div>
            <div className={sizeProduct}>
                Size:
                <div className={sizeBox}>
                    {detailProduct.size.map((item, index) => {
                        return <div key={index}>{item.name} </div>
                    })}
                </div>
            </div>
            <div className={addToCart}>
                <div className={quantitySelect}>
                    <SelectBox option={showOption} type="cart" />
                </div>

                <div className={actBtn}>
                    <Button
                        primary
                        content={<div>{<BsCart3 />} ADD TO CART</div>}
                    />
                </div>
            </div>
            <div className={separate}>
                <span>or</span>
            </div>
            <div style={{ height: '40px', marginBottom: '12px' }}>
                <Button primary content={<div>{<BsCart3 />} BUY NOW</div>} />
            </div>
            <div className={boxOrtherAdd}>
                <TfiReload style={{ width: '20px', height: '20px' }} />
                <span>Add to compare</span>
            </div>
            <div className={boxOrtherAdd}>
                <IoMdHeartEmpty style={{ width: '24px', height: '24px' }} />
                <span>Add to wishlist</span>
            </div>
            <div className={boxDesc}>
                SKU: <span>12345</span>
            </div>
            <div className={boxDesc}>
                Category: <span>Men</span>
            </div>
            <div className={boxDesc}>
                Estimated delivery: <span>5 - 7 days</span>
            </div>
            <div className={boxDesc}>Share: </div>
        </div>
    )
}

export default Details
