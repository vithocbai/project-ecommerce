import { useContext } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { SideBarContext } from '@/context/SideBarProvider'
import { MdOutlineClose } from 'react-icons/md'
import Login from '@components/ContentSidebar/Login/Login'
import Compare from '@components/ContentSidebar/Compare/Compare'
import Wishlist from '@components/ContentSidebar/Wishlist/Wishlist'
import Cart from '@components/ContentSidebar/Cart/Cart'

function Sidebar() {
    const { container, overlay, sidebar, slideSideBar, closeIcon } = styles
    const { isOpen, setIsOpen, type } = useContext(SideBarContext)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />
            case 'compare':
                return <Compare />
            case 'wishlist':
                return <Wishlist />
            case 'cart':
                return <Cart />
        }
    }

    return (
        <div className={container}>
            <div
                className={classNames({ [overlay]: isOpen })}
                onClick={() => handleToggle()}
            ></div>
            <div
                className={classNames(sidebar, {
                    [slideSideBar]: isOpen
                })}
            >
                {isOpen && (
                    <div onClick={() => handleToggle()} className={closeIcon}>
                        <MdOutlineClose style={{ fontSize: '22px' }} />
                    </div>
                )}
                {handleRenderContent()}
            </div>
        </div>
    )
}

export default Sidebar
