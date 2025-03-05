import Button from '@components/Button/Button'
import styles from './styles.module.scss'
import { useState, useRef, useEffect } from 'react'

import useTranslateXImage from '@/hooks/useTranslateXImage'

function SaleHomePage() {
    const { container, middleContent, title, desc, btnRead, mtImage, image } = styles
    const { translateXPositon } = useTranslateXImage()

    return (
        <div className={container}>
            <div
                style={{
                    transform: `translateX(${translateXPositon}px)`,
                    transition: 'transform 0.3s linear'
                }}
            >
                <img
                    className={image}
                    src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"
                    alt=""
                />
            </div>
            <div className={middleContent}>
                <h2 className={title}>Sale of the year</h2>
                <p className={desc}>
                    Libero sed faucibus facilisis fermentum. Est nibh sed massa
                    sodales.
                </p>
                <div className={btnRead}>
                    <Button content={'Read more'} primary={false}/>
                </div>
            </div>
            <div
                className={mtImage}
                style={{
                    transform: `translateX(-${translateXPositon}px)`,
                    transition: 'transform 0.3s linear'
                }}
            >
                <img
                    className={image}
                    src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"
                    alt=""
                />
            </div>
        </div>
    )
}

export default SaleHomePage
