import Button from '@components/Button/Button'
import styles from './styles.module.scss'
import { IoCloseOutline } from 'react-icons/io5'

function ProductItem({
    isCart,
    thumbProduct,
    titleProduct,
    sizeProduct,
    quantityProduct,
    priceProduct,
    skuProduct
}) {
    const {
        container,
        image,
        titleLink,
        selectQutity,
        price,
        close,
        codeProduct,
        size
    } = styles
    return (
        <div className={container}>
            <a href="">
                <img className={image} src={thumbProduct} alt="" />
            </a>
            <div>
                <h4>
                    <a href="" className={titleLink}>
                        {titleProduct}
                    </a>
                </h4>
                <div className={size} style={{ marginTop: '4px' }}>
                    Size: {sizeProduct}
                </div>
                {isCart && (
                    <select name="" id="" className={selectQutity}>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">6</option>
                        <option value="">7</option>
                    </select>
                )}

                <span className={price}>
                    {isCart && <span> x </span>}
                    {quantityProduct} x ${priceProduct}
                </span>
                <span class={codeProduct}>{skuProduct}</span>
            </div>
            <div className={close}>
                <IoCloseOutline style={{ fontSize: '22px' }} />
            </div>
        </div>
    )
}

export default ProductItem
