import Button from '@components/Button/Button'
import styles from './styles.module.scss'
import CountdownTimer from '@components/CountdownTimer/CountdownTimer'

function CountDownBanner() {
    const { container, content, title, buyNow, dateTime} = styles
    const targetDate = '2025-05-01'
    return (
        <div className={container}>
            <div className={content}>
                <div className={dateTime}>
                    <CountdownTimer targetDate={targetDate} />
                </div>
                <h2 className={title}>The classics make a comeback</h2>
                    <div className={buyNow}>
                        <Button content={'Buy now'} size="width160" />
                    </div>
            </div>
        </div>
    )
}

export default CountDownBanner
