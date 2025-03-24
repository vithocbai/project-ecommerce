import MyHeader from '@components/Header/Header'
import MainLayout from '@components/Layout/Layout'
import styles from './styles.module.scss'
import Button from '@components/Button/Button'
import { BsCart3 } from 'react-icons/bs'

function DetailProduct() {
    const {
        container,
        breadcrumbsBox,
        breadcrumbs,
        homeNav,
        breadcrumbsLink,
        backHome,
        contentSection,
        boxImage,
        boxContent,
        heading,
        price,
        desc,
        size,
        boxSize,
        nameSize,
        functionInfo,
        quantity,
        addCart,
        separate,
    } = styles
    return (
        <div>
            <MyHeader />
            <div className={container}>
                <MainLayout>
                    <div className={breadcrumbsBox}>
                        <div className={breadcrumbs}>
                            <a href="./" className={homeNav}>
                                Home
                            </a>{' '}
                            &gt; <h3 className={breadcrumbsLink}>Men</h3>
                        </div>
                        <div className={backHome}>
                            &lt; Return to previous page
                        </div>
                    </div>
                    <div className={contentSection}>
                        <div className={boxImage}>
                            <img
                                src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg"
                                alt=""
                            />
                            <img
                                src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg"
                                alt=""
                            />
                            <img
                                src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg"
                                alt=""
                            />
                            <img
                                src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg"
                                alt=""
                            />
                        </div>
                        <div className={boxContent}>
                            <h2 className={heading}>10K Yellow Gold</h2>
                            <p className={price}>$99.99</p>
                            <p className={desc}>
                                Amet, elit tellus, nisi odio velit ut. Euismod
                                sit arcu, quisque arcu purus orci leo.
                            </p>
                            <div className={size}>Size</div>
                            <div className={boxSize}>
                                <div className={nameSize}>L</div>
                                <div className={nameSize}>M</div>
                                <div className={nameSize}>S</div>
                            </div>
                            <div className={functionInfo}>
                                <div className={quantity}>
                                    <span>-</span>
                                    <div>1</div>
                                    <span>+</span>
                                </div>
                                <div className={addCart}>
                                    <Button content="ADD TO CART" primary />
                                </div>
                            </div>
                            <div className={separate}>
                                <span>or</span>
                            </div>
                            <div
                                style={{ height: '40px', marginBottom: '12px' }}
                            >
                                <Button
                                    primary
                                    content={<div>{<BsCart3 />} BUY NOW</div>}
                                />
                            </div>
                        </div>
                    </div>
                </MainLayout>
            </div>
        </div>
    )
}

export default DetailProduct
