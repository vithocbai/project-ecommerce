import Button from '@components/Button/Button'
import styles from '../styles.module.scss'
import CountdownTimer from '@components/CountdownTimer/CountdownTimer'

function Banner() {
    const { containerBanner, bannerContent, title, btnBuy, countDowntBox } =
        styles
    const targetDate = '2025-05-01'
    return (
        <div className={containerBanner}>
            <div className={bannerContent}>
                <div className={countDowntBox}>
                    <CountdownTimer targetDate={targetDate} />
                </div>
                <div className={title}>The classics make a comeback</div>
                <div className={btnBuy}>
                    <Button content={'Buy Now'} primary />
                </div>
            </div>
        </div>
    )
}

export default Banner
