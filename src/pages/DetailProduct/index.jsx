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

    const dataSrc = [
        {
            src: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-3.2-min.jpg'
        },
        {
            src: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-3.1-min.jpg'
        },
        {
            src: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-3.2-min.jpg'
        }
    ]

    const tempDateSlider = [
        {
            images: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-3.2-min.jpg',
            name: 'Related products',
            price: '12000',
            size: [{ name: 'M' }, { name: 'L' }]
        },
        {
            images: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg',
            name: 'Related products',
            price: '12000',
            size: [{ name: 'M' }, { name: 'L' }]
        },
        {
            images: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-3.2-min.jpg',
            name: 'Related products',
            price: '12000',
            size: [{ name: 'M' }, { name: 'L' }]
        },
        {
            images: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg',
            name: 'Related products',
            price: '12000',
            size: [{ name: 'M' }, { name: 'L' }]
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
                            {dataSrc.map((item, index) => (
                                <div key={index}>{ImageZoom(item.src)}</div>
                            ))}
                        </div>

                        <div className={boxContent}>
                            <h2 className={heading}>10K Yellow Gold</h2>
                            <p className={price}>$99.99</p>
                            <p className={desc}>
                                Amet, elit tellus, nisi odio velit ut. Euismod
                                sit arcu, quisque arcu purus orci leo.
                            </p>
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
                                    onClick={() => setSizeSelected('')}
                                >
                                    clear
                                </div>
                            )}

                            <div className={functionInfo}>
                                <div className={quantity}>
                                    <span>-</span>
                                    <div>1</div>
                                    <span>+</span>
                                </div>
                                <div className={addCart}>
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
                                data={tempDateSlider}
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
