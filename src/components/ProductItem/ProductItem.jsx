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

    const { isShowGrid } = useContext(OurShopContext)

    const [isChooseSize, setIsChooseSize] = useState('')

    const handleChooseSize = (size) => {
        setIsChooseSize(size)
    }

    const removeSize = () => {
        setIsChooseSize('')
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
                    <div className={icon}>
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
                    <div className={groupBtn}>
                        <Button content="ADD TO CART" primary />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductItem
