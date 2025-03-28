import { useContext } from 'react'
import styles from '../styles.module.scss'
import { SideBarContext } from '@/context/SideBarProvider'
import { StoreContext } from '@/context/StoreProvider'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

function Menu({ content, href }) {
    const { menu, subMenu } = styles
    const { setIsOpen, setType } = useContext(SideBarContext)
    const { userInfo, setUserInfoLogOut } = useContext(StoreContext)
    const [isShowSubMenu, setIsShowSubMenu] = useState(false)
    const navigate = useNavigate()

    const navigateTo = (path) => {
        if (window.location.pathname !== `/${path}`) {
            navigate(`/${path}`)
        }
    }
    

    const handleShowLogin = () => {
        if (!userInfo) {
            setIsOpen(true)
            setType('login')
        }
    }

    const handleClickShowLogin = (event) => {
        if (content === 'Sign In') {
            handleShowLogin()
        }
        if (content == 'Our Shop') {
            navigateTo('shop')
        }
        if (content == 'About us') {
            navigateTo('about-us')
        }
        if (content == 'Contacts') {
            navigateTo('contacts')
        }
    }

    const handleRenderUser = (content) => {
        if (content === 'Sign In' && userInfo) {
            return `Hello:${userInfo?.username}`
        } else {
            return content
        }
    }

    const handleRenderSubMenu = () => {
        if (content === 'Sign In' && userInfo) {
            setIsShowSubMenu(true)
        }
    }

    const handleLogOut = () => {
        Cookies.remove('token')
        Cookies.remove('refreshToken')
        Cookies.remove('userId')
        setIsShowSubMenu(false)
        setUserInfoLogOut()
        window.location.reload()
    }

    return (
        <div
            className={menu}
            onClick={() => handleClickShowLogin()}
            onMouseEnter={handleRenderSubMenu}
        >
            {handleRenderUser(content)}
            {isShowSubMenu && (
                <div
                    onClick={handleLogOut}
                    onMouseLeave={() => setIsShowSubMenu(false)}
                    className={subMenu}
                >
                    LogOut
                </div>
            )}
        </div>
    )
}

export default Menu
