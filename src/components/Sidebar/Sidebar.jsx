import { useContext } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { SideBarContext } from '@/context/SideBarProvider'
import { MdOutlineClose } from 'react-icons/md'
import Login from '@components/ContentSidebar/Login/Login'

function Sidebar() {
    const { isOpen, setIsOpen } = useContext(SideBarContext)
    const { container, overlay, sidebar, slideSideBar, closeIcon } = styles
    const handleToggle = () => {
        setIsOpen(!isOpen)
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
                <Login />
                {isOpen && <div
                    onClick={() => handleToggle()}
                    className={closeIcon}
                >
                    <MdOutlineClose />
                </div>}
            </div>
        </div>
    )
}

export default Sidebar
