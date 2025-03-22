import { useContext } from 'react'
import { SideBarContext } from '@/context/SideBarProvider'
import SliderScroll from '@components/SliderScroll/SliderScroll'
import styles from './styles.module.scss'
import SelectBox from '@/pages/OurShop/components/SelectBox'
import Button from '@components/Button/Button'
import { BsCart3 } from 'react-icons/bs'
import { TfiReload } from 'react-icons/tfi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebookF } from 'react-icons/fa6'
import { FaVk } from 'react-icons/fa'
import { TiSocialPinterest } from 'react-icons/ti'
import { VscMail } from 'react-icons/vsc'
import { RiLinkedinFill } from 'react-icons/ri'
import { FaWhatsapp } from 'react-icons/fa'
import { FaSkype } from 'react-icons/fa'
import { useState } from 'react'
import cls from 'classnames'
import { addProductCart } from '@/apis/cartServices'

function Details() {
    const {
        containerDetails,
        title,
        price,
        desc,
        sizeBox,
        isActive,
        clearSize,
        sizeProduct,
        addToCart,
        actBtn,
        quantitySelect,
        separate,
        boxOrtherAdd,
        boxDesc,
        listSocial
    } = styles

    const [chooseSize, setChooseSize] = useState('')
    const [quantity, setQuantity] = useState('1')
    const {
        detailProduct,
        userId,
        setType,
        setIsOpen,
        handGetListProductsCart
    } = useContext(SideBarContext)

    const showOption = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' }
    ]

    const handleGetSize = (value) => {
        setChooseSize(value)
    }

    const handleClear = () => {
        setChooseSize('')
    }

    const handleGetQuantity = (value) => {
        setQuantity(value)
    }

    const handleAddToCart = () => {
        const data = {
            userId: userId,
            productId: detailProduct._id,
            quantity: quantity,
            size: chooseSize
        }
        setIsOpen(false)
        addProductCart(data)
            .then((res) => {
                setIsOpen(true)
                setType('cart')
                handGetListProductsCart(data.userId, 'cart')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className={containerDetails}>
            <SliderScroll data={detailProduct.images} />
            <div className={title}>{detailProduct.name}</div>
            <div className={price}>${detailProduct.price}</div>
            <div className={desc}>{detailProduct.description}</div>
            <div className={sizeProduct}>
                Size: {chooseSize}
                <div className={sizeBox}>
                    {detailProduct.size.map((item, index) => {
                        return (
                            <div
                                className={cls({
                                    [isActive]: item.name === chooseSize
                                })}
                                key={index}
                                onClick={() => handleGetSize(item.name)}
                            >
                                {item.name}
                            </div>
                        )
                    })}
                </div>
                {chooseSize ? (
                    <span onClick={handleClear} className={clearSize}>
                        clear
                    </span>
                ) : (
                    ''
                )}
            </div>
            <div className={addToCart}>
                <div className={quantitySelect}>
                    <SelectBox
                        option={showOption}
                        type="show"
                        defaultValue={quantity}
                        getValue={handleGetQuantity}
                    />
                </div>

                <div className={actBtn} onClick={() => handleAddToCart()}>
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
            <div className={boxDesc} style={{ display: 'flex' }}>
                Share:
                <ul className={listSocial}>
                    <li>
                        <a href="">
                            <FaXTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FaVk />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <TiSocialPinterest />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <VscMail />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <RiLinkedinFill />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FaWhatsapp />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FaSkype />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Details
