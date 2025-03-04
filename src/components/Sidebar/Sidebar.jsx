import { useContext } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { SideBarContext } from '@/context/SideBarProvider'
import { MdOutlineClose } from 'react-icons/md'

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
                This is sibar
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
