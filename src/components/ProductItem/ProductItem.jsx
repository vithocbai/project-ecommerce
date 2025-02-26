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
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg"
                    alt=""
                />
                <img
                    className={imgWhenHover}
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg"
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
                    <a  className={titleProduct} href="">10K Yellow Gold</a>
                </h3>
                <span className={priceProduct}>$99.99</span>
            </div>
        </div>
    )
}

export default ProductItem
