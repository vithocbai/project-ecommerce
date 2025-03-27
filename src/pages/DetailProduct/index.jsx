import MyHeader from '@components/Header/Header'
import MainLayout from '@components/Layout/Layout'
import styles from './styles.module.scss'
import Button from '@components/Button/Button'
import { BsCart3 } from 'react-icons/bs'
import { IoMdHeartEmpty } from 'react-icons/io'
import { TfiReload } from 'react-icons/tfi'
import SafeCheckout from '@/pages/Cart/components/Contents/SafeCheckOut'
import Accordion from '@components/Accordion/Accordion'
import MyFooter from '@components/Footer/Footer'
import { useState } from 'react'
import InfomationProduct from '@/pages/DetailProduct/components/Infomation'
import ReviewsProduct from '@/pages/DetailProduct/components/Reviews'
import SliderScroll from '@components/SliderScroll/SliderScroll'
import React from 'react'
import Zoom from 'react-img-zoom'
import cls from 'classnames'
import { useEffect } from 'react'
import { getDetailProduct, getRealatedProduct } from '@/apis/productService'
import { useParams } from 'react-router-dom'
import { handleAddProductToCart } from '@/utils/helper'
import { useContext } from 'react'
import { SideBarContext } from '@/context/SideBarProvider'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { addProductCart } from '@/apis/cartServices'
import { useNavigate } from 'react-router-dom'

const {
    container,
    breadcrumbsBox,
    breadcrumbs,
    homeNav,
    breadcrumbsLink,
    backHome,
    contentSection,
    boxImage,
    boxContent,
    heading,
    price,
    desc,
    size,
    boxSize,
    nameSize,
    isActive,
    clearSize,
    functionInfo,
    quantity,
    addCart,
    separate,
    boxIcon,
    heartIcon,
    reloadIcon,
    productMeta,
    metaInfo,
    listProduct,
    boxProductItem,
    activeDisabled
} = styles
function DetailProduct() {
    const [menuSelect, setMenuSelect] = useState(1)
    const [sizeSlected, setSizeSelected] = useState('')
    const [isQuantity, setIsQuantity] = useState(1)
    const [dataProduct, setDataProduct] = useState()
    const [dataProductRelated, setDataProductRelated] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const param = useParams()
    const { setIsOpen, setType, handGetListProductsCart } =
        useContext(SideBarContext)
    const userId = Cookies.get('userId')

    const dataAccordionMenu = [
        {
            id: 1,
            titleMenu: 'Additional information',
            contentMenu: <div>{<InfomationProduct />}</div>
        },
        {
            id: 2,
            titleMenu: 'Reviews (0)',
            contentMenu: <div>{<ReviewsProduct />}</div>
        }
    ]

    const dataSize = [
        {
            name: 'S',
            amount: '1000'
        },
        {
            name: 'M',
            amount: '1000'
        },
        {
            name: 'L',
            amount: '1000'
        }
    ]

    const ImageZoom = (src) => {
        return <Zoom img={src} zoomScale={2} width={295} height={350} />
    }

    const handleMenuSelect = (id) => {
        setMenuSelect(id)
    }

    const handleSelectedSize = (size) => {
        setSizeSelected(size)
    }

    const FeatchDataDetail = async (id) => {
        try {
            const data = await getDetailProduct(id)
            setDataProduct(data)
        } catch (err) {
            console.log(err)
        }
    }

    const FeatchDataRelated = async (id) => {
        try {
            const data = await getRealatedProduct(id)
            if (data) setDataProductRelated(data)
        } catch (err) {
            console.error(err)
        }
    }
    const handleSetQuantity = (type) => {
        setIsQuantity((prev) => {
            if (type === 'decrease' && prev === 1) return prev
            return type === 'decrease' ? prev - 1 : prev + 1
        })
    }

    const addProductToCart = () => {
        handleAddProductToCart(
            setIsOpen,
            setType,
            toast,
            sizeSlected,
            userId,
            param.id,
            isQuantity,
            setIsLoading,
            handGetListProductsCart
        )
    }

    const buyNow = () => {
        const data = {
            userId,
            productId: param.id,
            quantity: isQuantity,
            size: sizeSlected
        }
        addProductCart(data)
            .then((res) => {
                toast.success('Add Product to cart successfully')
                setIsLoading(false)
            })
            .catch((err) => {
                toast.error('Add Product to cart failed')
                setIsLoading(false)
            })

        navigate('/cart')
    }

    useEffect(() => {
        if (param.id) {
            FeatchDataDetail(param.id)
            FeatchDataRelated(param.id)
        }
    }, [param])

    return (
        <div>
            <MyHeader />
            <div className={container}>
                <MainLayout>
                    <div className={breadcrumbsBox}>
                        <div className={breadcrumbs}>
                            <a href="" className={homeNav}>
                                Home
                            </a>
                            &gt; <h3 className={breadcrumbsLink}>Men</h3>
                        </div>
                        <div className={backHome}>
                            &lt; Return to previous page
                        </div>
                    </div>

                    <div className={contentSection}>
                        <div className={boxImage}>
                            {dataProduct?.images.map((item, index) => (
                                <div key={index}>{ImageZoom(item)}</div>
                            ))}
                        </div>

                        <div className={boxContent}>
                            <h2 className={heading}>{dataProduct?.name}</h2>
                            <p className={price}>${dataProduct?.price}</p>
                            <p className={desc}>{dataProduct?.description}</p>
                            <div className={size}>Size: {sizeSlected}</div>
                            <div className={boxSize}>
                                {dataSize.map((itemSize, index) => {
                                    return (
                                        <div
                                            className={cls(nameSize, {
                                                [isActive]:
                                                    sizeSlected ===
                                                    itemSize.name
                                            })}
                                            key={index}
                                            onClick={() =>
                                                handleSelectedSize(
                                                    itemSize.name
                                                )
                                            }
                                        >
                                            {itemSize.name}
                                        </div>
                                    )
                                })}
                            </div>
                            {sizeSlected && (
                                <div
                                    className={clearSize}
                                    onClick={() => {
                                        setSizeSelected('')
                                    }}
                                >
                                    Clear
                                </div>
                            )}

                            <div className={functionInfo}>
                                <div className={quantity}>
                                    <span
                                        onClick={() =>
                                            handleSetQuantity('decrease')
                                        }
                                    >
                                        -
                                    </span>
                                    <div>{isQuantity}</div>
                                    <span
                                        onClick={() =>
                                            handleSetQuantity('increase')
                                        }
                                    >
                                        +
                                    </span>
                                </div>
                                <div
                                    className={addCart}
                                    onClick={() => {
                                        if (sizeSlected) addProductToCart()
                                    }}
                                >
                                    <Button
                                        content="ADD TO CART"
                                        primary
                                        classNameCustomer={
                                            !sizeSlected && activeDisabled
                                        }
                                    />
                                </div>
                            </div>
                            <div className={separate}>
                                <span>or</span>
                            </div>
                            <div
                                style={{ height: '40px', marginBottom: '12px' }}
                                onClick={() => {
                                    if (sizeSlected) buyNow()
                                }}
                            >
                                <Button
                                    primary
                                    content={<div>{<BsCart3 />} BUY NOW</div>}
                                    classNameCustomer={
                                        !sizeSlected && activeDisabled
                                    }
                                />
                            </div>
                            <div className={boxIcon}>
                                <div className={heartIcon}>
                                    <IoMdHeartEmpty />
                                </div>
                                <div className={reloadIcon}>
                                    <TfiReload />
                                </div>
                            </div>
                            <div>
                                <SafeCheckout />
                            </div>

                            <div className={productMeta}>
                                <div className={metaInfo}>
                                    Brand: <span>Brand 04</span>
                                </div>
                                <div className={metaInfo}>
                                    Sku: <span>12420</span>
                                </div>
                                <div className={metaInfo}>
                                    Category: <span>Men</span>
                                </div>
                            </div>

                            {dataAccordionMenu.map((item, index) => {
                                return (
                                    <Accordion
                                        key={index}
                                        titleMenu={item.titleMenu}
                                        contentMenu={item.contentMenu}
                                        onClick={() =>
                                            handleMenuSelect(item.id)
                                        }
                                        isSelect={menuSelect === item.id}
                                    />
                                )
                            })}
                        </div>
                    </div>

                    <div className={listProduct}>
                        <h3>Related products</h3>
                        <div className={boxProductItem}>
                            <SliderScroll
                                data={dataProductRelated}
                                isProductItem
                                slideToShowProduct={4}
                            />
                        </div>
                    </div>
                </MainLayout>
            </div>

            <MyFooter />
        </div>
    )
}

export default DetailProduct
