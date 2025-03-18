import MyHeader from '@components/Header/Header'
import Contents from './components/Contents/Contents'
import Steps from './components/Steps/steps'
import MyFooter from '@components/Footer/Footer'
import styles from './styles.module.scss'

function Cart() {
    const { containerCart } = styles
    return (
        <>
            <MyHeader />
            <div className={containerCart}>
                <Steps />
                <Contents />
            </div>
            <MyFooter />
        </>
    )
}

export default Cart
