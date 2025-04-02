import styles from './styles.module.scss'
import { TfiReload } from 'react-icons/tfi'
import { IoEyeOutline } from 'react-icons/io5'
import { IoBagOutline } from 'react-icons/io5'
import { IoMdHeartEmpty } from 'react-icons/io'
import cls from 'classnames'
import Button from '@components/Button/Button'
import { useContext } from 'react'
import { OurShopContext } from '@/context/OurShopProvider'
import { useState } from 'react'
import { useEffect } from 'react'
import { SideBarContext } from '@/context/SideBarProvider'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { ImSpinner3 } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'
import { handleAddProductToCart } from '@/utils/helper'

function ProductItem({
    src,
    prevSrc,
    title,
    price,
    details,
    isHomePage = true,
    setShow
}) {
    const {
        containerGrid,
        boxImg,
        img,
        imgWhenHover,
        iconFncWhenShow,
        icon,
        contentProduct,
        titleProduct,
        priceProduct,
        boxSize,
        size,
        activeSize,
        clearSize,
        textCenter,
        brand,
        groupBtn
    } = styles

    const ourShopStore = useContext(OurShopContext)
    const [isChooseSize, setIsChooseSize] = useState('')
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid)

    const {
        setIsOpen,
        setType,
        handGetListProductsCart,
        setDetailProduct,
        compareList,
        setCompareList
    } = useContext(SideBarContext)

    const userId = Cookies.get('userId')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (isHomePage) {
            setIsShowGrid(true)
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid)
        }
    }, [ourShopStore?.isShowGrid, isHomePage])

    useEffect(() => {
        if (setShow) setIsShowGrid(true)
    }, [setShow])

    const handleChooseSize = (size) => {
        setIsChooseSize(size)
    }

    const removeSize = () => {
        setIsChooseSize('')
    }

    const handleAddToCart = () => {
        handleAddProductToCart(
            setIsOpen,
            setType,
            toast,
            isChooseSize,
            userId,
            details._id,
            1,
            setIsLoading,
            handGetListProductsCart
        )
    }

    const handleShowDetailProductSidebar = () => {
        setIsOpen(true)
        setType('detail')
        setDetailProduct(details)
    }

    const handleShowReloadSidebar = () => {
        // Kiểm tra nếu sản phẩm đã có trong compareList thì không thêm lại
        const isAlreadyAdded = compareList.some(
            (item) => item._id === details._id
        )
        if (!isAlreadyAdded) {
            setCompareList([...compareList, details])
        }

        setIsOpen(true)
        setType('compare')
    }
    const handleNavigateToDetails = () => {
        const path = `/product/${details._id}`
        navigate(path)
    }

    return (
        <div className={!isShowGrid ? containerGrid : ' '}>
            <div className={boxImg}>
                <div onClick={handleNavigateToDetails}>
                    <img className={img} src={src} alt="" />
                    <img className={imgWhenHover} src={prevSrc} alt="" />
                </div>
                <div className={iconFncWhenShow}>
                    <div className={icon}>
                        <IoBagOutline style={{ fontSize: '20px' }} />
                    </div>
                    <div className={icon}>
                        <IoMdHeartEmpty style={{ fontSize: '22px' }} />
                    </div>
                    <div
                        className={icon}
                        onClick={() => handleShowReloadSidebar()}
                    >
                        <TfiReload style={{ fontSize: '18px' }} />
                    </div>
                    <div
                        className={icon}
                        onClick={() => handleShowDetailProductSidebar()}
                    >
                        <IoEyeOutline style={{ fontSize: '20px' }} />
                    </div>
                </div>
            </div>
            <div className={contentProduct}>
                {!isHomePage && (
                    <div className={boxSize}>
                        {details.size.map((data, index) => {
                            return (
                                <div
                                    key={index}
                                    className={cls(size, {
                                        [activeSize]: data.name === isChooseSize
                                    })}
                                    onClick={() => handleChooseSize(data.name)}
                                >
                                    {data.name}
                                </div>
                            )
                        })}
                    </div>
                )}
                {isChooseSize && (
                    <div className={clearSize} onClick={removeSize}>
                        clear
                    </div>
                )}
                <div
                    className={cls({
                        [textCenter]: !isHomePage
                    })}
                >
                    <h3>
                        <a className={titleProduct} href="">
                            {title}
                        </a>
                    </h3>
                    {!isHomePage && <div className={brand}>Brand 01</div>}
                    <span className={priceProduct}>${price}</span>
                </div>
                {!isHomePage && (
                    <div className={groupBtn} onClick={handleAddToCart}>
                        <Button
                            content={
                                isLoading ? (
                                    <ImSpinner3 style={{ fontSize: '28px' }} />
                                ) : (
                                    'ADD TO CART'
                                )
                            }
                            primary
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductItem
