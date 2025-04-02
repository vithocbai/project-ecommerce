import BoxIcon from './BoxIcon/BoxIcon'
import { dataBoxIcons, dataMenu } from './constants'
import Menu from './Menu/Menu'
import styles from './styles.module.scss'
import logo from '@icons/images/logo.png'
import useScrollHandling from '@/hooks/useScrollHanding'
import classNames from 'classnames'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { SideBarContext } from '@/context/SideBarProvider'
import { TfiReload } from 'react-icons/tfi'
import { CiHeart } from 'react-icons/ci'
import { BsCartCheck } from 'react-icons/bs'

function MyHeader() {
    const {
        container,
        containerHeader,
        containerBox,
        containerBoxIcon,
        containerMenu,
        headerTop,
        fixedPositon,
        boxCart,
        quantity
    } = styles

    const { scrollPositon } = useScrollHandling()
    const [fixedHeader, setFixedhader] = useState()

    const { setIsOpen, setType, listProductCart, compareList } =
        useContext(SideBarContext)
    const handleOpenSideBar = (type) => {
        setIsOpen(true)
        setType(type)
    }

    useEffect(() => {
        setFixedhader(scrollPositon > 88 ? true : false)
    })

    return (
        <div
            className={classNames(container, headerTop, {
                [fixedPositon]: fixedHeader
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcons.map((data, item) => {
                            return (
                                <BoxIcon
                                    key={item}
                                    type={data.type}
                                    href={data.href}
                                />
                            )
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((data, item) => {
                            return (
                                <Menu
                                    key={item}
                                    content={data.content}
                                    href={data.href}
                                />
                            )
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={logo}
                        alt=""
                        style={{ width: '153px', height: '53px' }}
                    />
                </div>

                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu
                            .slice(3, dataMenu.length)
                            .map((data, item) => {
                                return (
                                    <Menu
                                        key={item}
                                        content={data.content}
                                        href={data.href}
                                    />
                                )
                            })}
                    </div>
                    <div className={containerBoxIcon}>
                        <div className={boxCart}>
                            <TfiReload
                                style={{ fontSize: '22px' }}
                                onClick={() => handleOpenSideBar('compare')}
                            />

                            {compareList.length > 0 && (
                                <span className={quantity}>
                                    {compareList.length}
                                </span> // ✅ Hiển thị số lượng Compare
                            )}
                        </div>
                        <CiHeart
                            style={{ fontSize: '28px' }}
                            onClick={() => handleOpenSideBar('wishlist')}
                        />
                        <div className={boxCart}>
                            <BsCartCheck
                                style={{ fontSize: '22px' }}
                                onClick={() => handleOpenSideBar('cart')}
                            />
                            <div className={quantity}>
                                {listProductCart.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyHeader
