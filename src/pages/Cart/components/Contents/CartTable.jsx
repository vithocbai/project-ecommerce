import React, { useState } from 'react'
import styles from '../../styles.module.scss'
import { FaRegTrashCan } from 'react-icons/fa6'
import SelectBox from '@/pages/OurShop/components/SelectBox'

const CartTable = ({ listProductCart, getData }) => {
    const showOption = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' }
    ]

    const getValueSelect = (userId, productId, quantity, size) => {
        const data = {
            userId,
            productId,
            quantity,
            size,
            isMultiple: true
        }
        getData(data)
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
                {listProductCart.map((item, index) => (
                    <tr key={index}>
                        <td className={styles.productInfo}>
                            <img
                                src={item.images[0]}
                                alt={name}
                                className={styles.itemImage}
                            />
                            <div>
                                <p className={styles.itemName}>{item.name}</p>
                                <p className={styles.itemSize}>
                                    Size: {item.size}
                                </p>
                            </div>
                        </td>
                        <td>
                            <button className={styles.removeItem}>
                                <FaRegTrashCan />
                            </button>
                        </td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>{item.sku}</td>
                        <td className={styles.quantitySelect}>
                            <SelectBox
                                option={showOption}
                                getValue={(e) =>
                                    getValueSelect(
                                        item.userId,
                                        item.productId,
                                        e,
                                        item.size
                                    )
                                }
                                type="show"
                                defaultValue={item.quantity}
                            />
                        </td>
                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CartTable
