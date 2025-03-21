import styles from './styles.module.scss'
import reLoad from '@icons/svgs/reLoadIcon.svg'
import heartIcon from '@icons/svgs/heartIcon.svg'
import eyeIcon from '@icons/svgs/eyeIcon.svg'
import bagIcon from '@icons/svgs/bagIcon.svg'
import cls from 'classnames'
import Button from '@components/Button/Button'
import { useContext } from 'react'
import { OurShopContext } from '@/context/OurShopProvider'
import { useState } from 'react'
import { useEffect } from 'react'
import { SideBarContext } from '@/context/SideBarProvider'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { addProductCart } from '@/apis/cartServices'
import { ImSpinner3 } from 'react-icons/im'

function ProductItem({
    src,
    prevSrc,
    title,
    price,
    details,
    isHomePage = true
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
    const { setIsOpen, setType, handGetListProductsCart, setDetailProduct} =
        useContext(SideBarContext)
    const userId = Cookies.get('userId')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (isHomePage) {
            setIsShowGrid(true)
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid)
        }
    }, [ourShopStore?.isShowGrid, isHomePage])

    const handleChooseSize = (size) => {
        setIsChooseSize(size)
    }

    const removeSize = () => {
        setIsChooseSize('')
    }

    const handleAddToCart = () => {
        if (!userId) {
            setIsOpen(true)
            setType('login')
            toast.warning('Bạn cần đăng nhập')
            return
        }

        if (!isChooseSize) {
            toast.warning('Bạn cần chọn Size')
            return
        }

        const data = {
            userId,
            productId: details._id,
            quantity: 1,
            size: isChooseSize
        }
        setIsLoading(true)
        addProductCart(data)
            .then((res) => {
                setIsOpen(true)
                setType('cart')
                toast.success('Thêm sản phẩm thành công')
                setIsLoading(false)
                if (userId) {
                    handGetListProductsCart(userId, 'cart')
                }
            })
            .catch((err) => {
                console.log(err)
                setIsLoading(false)
            })
    }

    const handleShowDetailProductSidebar = () => {
        setIsOpen(true)
        setType('detail')
        setDetailProduct(details)
        
    }

    return (
        <div className={!isShowGrid ? containerGrid : ' '}>
            <div className={boxImg}>
                <img className={img} src={src} alt="" />
                <img className={imgWhenHover} src={prevSrc} alt="" />
                <div className={iconFncWhenShow}>
                    <div className={icon}>
                        <img src={bagIcon} alt="" />
                    </div>
                    <div className={icon}>
                        <img src={heartIcon} alt="" />
                    </div>
                    <div className={icon}>
                        <img src={reLoad} alt="" />
                    </div>
                    <div
                        className={icon}
                        onClick={() => handleShowDetailProductSidebar()}
                    >
                        <img src={eyeIcon} alt="" />
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
