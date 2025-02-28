import Button from '@components/Button/Button'
import styles from './styles.module.scss'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import useTranslateX from './translateXPosition'

function SaleHomePage() {
    const { container, middleContent, title, desc, mtBtn, image } = styles
    const {translateXPositon} = useTranslateX()

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
                <div>
                    <Button content={'Read more'} size="width167" />
                </div>
            </div>
            <div
                className={mtBtn}
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
