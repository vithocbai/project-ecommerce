import styles from './styles.module.scss'
import reLoad from '@icons/svgs/reLoadIcon.svg'
import heartIcon from '@icons/svgs/heartIcon.svg'
import eyeIcon from '@icons/svgs/eyeIcon.svg'
import bagIcon from '@icons/svgs/bagIcon.svg'

function ProductItem({src, prevSrc, title, price}) {
    const { boxImg, img, imgWhenHover, iconFncWhenShow, icon, contentProduct, titleProduct , priceProduct } =
        styles

    return (
        <div>
            <div className={boxImg}>
                <img
                    className={img}
                    src={src}
                    alt=""
                />
                <img
                    className={imgWhenHover}
                    src={prevSrc}
                    alt=""
                />
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
                <h3>
                    <a className={titleProduct} href="">{title}</a>
                </h3>
                <span className={priceProduct}>${price}</span>
            </div>
        </div>
    )
}

export default ProductItem
