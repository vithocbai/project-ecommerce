import Button from '@components/Button/Button'
import styles from '../../styles.module.scss'

function CartSummary() {
    const {
        containerSummary,
        title,
        boxTotal,
        subTotal,
        priceSubTotal,
        total,
        priceTotal,
        groupBtn
    } = styles
    return (
        <div className={containerSummary}>
            <div className={title}>Cart totals</div>
            <div className={boxTotal}>
                <div className={subTotal}>Subtotal</div>
                <div className={priceSubTotal}>$3,470.16</div>
            </div>
            <div className={boxTotal}>
                <div className={total}>ToTal</div>
                <div className={priceTotal}>$3,470.16</div>
            </div>
            <div className={groupBtn}>
                <Button content="PROCEED TO CHECKOUT" primary={true}/>
                <Button content="CONTINUTE SHOPING" />
            </div>
        </div>
    )
}

export default CartSummary
