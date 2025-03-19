import { useState } from 'react'
import styles from '../../styles.module.scss'

function SafeCheckout() {
    const {
        containerCheckout,
        title,
        highLight,
        paymentIcons,
        wrapperIcon,
        secureText
    } = styles

    const srcMethod = [
        {
            src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
            alt: 'Visa'
        },
        {
            src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
            alt: 'Mastercard'
        },
        {
            src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
            alt: 'PayPal'
        },
        {
            src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
            alt: 'American Express'
        },
        {
            src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
            alt: 'Maestro'
        },
        {
            src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg',
            alt: 'Pay safely with Bitcoin'
        }
    ]

    return (
        <div className={containerCheckout}>
            <legend className={title}>
                Guaranteed <span className={highLight}>safe</span> checkout
            </legend>
            <div className={paymentIcons}>
                <div className={wrapperIcon}>
                    {srcMethod.map((item, index) => {
                        return <img key={index} src={item.src} alt={item.alt} />
                    })}
                </div>
            </div>

            <p className={secureText}>Your Payment is 100% Secure</p>
        </div>
    )
}

export default SafeCheckout
