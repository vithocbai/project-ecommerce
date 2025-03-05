import Button from '../Button/Button'
import styles from './styles.module.scss'


function Banner() {
    const { container, content, heading, desc, btnbanner} = styles
    return (
        <>
            <div className={container}>
                <div className={content}>
                    <h1 className={heading}>XStore Marseille04 Demo</h1>
                    <p className={desc}>
                        Make yours celebrations even more special this years
                        with beautiful.
                    </p>
                    <div className={btnbanner}>
                        <Button content={'Go to shop'} primary/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
