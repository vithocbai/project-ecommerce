import React, { useState } from 'react'
import styles from '../../styles.module.scss'
import { FaRegTrashCan } from 'react-icons/fa6'
import SelectBox from '@/pages/OurShop/components/SelectBox'

const CartTable = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Consectetur nibh at',
            price: 119.99,
            sku: '12349',
            size: 'M',
            quantity: 1,
            image: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg'
        },
        {
            id: 2,
            name: 'Amet faucibus nunc',
            price: 1879.99,
            sku: '87654',
            size: 'M',
            quantity: 1,
            image: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg'
        }
    ])

    const handleQuantityChange = (id, quantity) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity: quantity } : item
            )
        )
    }

    const handleRemove = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id))
    }

    const showOption = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' }
    ]

    const getValueSelect = (value, type) => {
        if (type === 'sort') {
            setSortId(value)
        } else {
            setShowId(value)
        }
    }
    
    return (
        <table className={styles.cartTable}>
            <thead>
                <tr>
                    <th>PRODUCT</th>
                    <th></th>
                    <th>PRICE</th>
                    <th>SKU</th>
                    <th>QUANTITY</th>
                    <th>SUBTOTAL</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map(
                    ({ id, name, price, sku, size, quantity, image }) => (
                        <tr key={id}>
                            <td className={styles.productInfo}>
                                <img
                                    src={image}
                                    alt={name}
                                    className={styles.itemImage}
                                />
                                <div>
                                    <p className={styles.itemName}>{name}</p>
                                    <p className={styles.itemSize}>
                                        Size: {size}
                                    </p>
                                </div>
                            </td>
                            <td>
                                <button
                                    className={styles.removeItem}
                                    onClick={() => handleRemove(id)}
                                >
                                    <FaRegTrashCan />
                                </button>
                            </td>
                            <td>${price.toFixed(2)}</td>
                            <td>{sku}</td>
                            <td className={styles.quantitySelect}>
                                <SelectBox option={showOption} />
                            </td>
                            <td>${(price * quantity).toFixed(2)}</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    )
}

export default CartTable
