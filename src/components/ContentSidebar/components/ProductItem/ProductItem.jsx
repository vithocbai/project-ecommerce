import Button from '@components/Button/Button'
import styles from './styles.module.scss'
import { IoCloseOutline } from 'react-icons/io5'

function ProductItem({ isCart }) {
    const { container, image, titleLink, selectQutity, price, close } = styles
    return (
        <div className={container}>
            <a href="">
                <img
                    className={image}
                    src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg"
                    alt=""
                />
            </a>
            <div>
                <h4>
                    <a href="" className={titleLink}>
                        Gravida quis
                    </a>
                </h4>
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
                   {isCart &&  <span> x </span>}
                    $434.20
                </span>
            </div>
            <div className={close}>
                <IoCloseOutline style={{ fontSize: '22px' }} />
            </div>
        </div>
    )
}

export default ProductItem
