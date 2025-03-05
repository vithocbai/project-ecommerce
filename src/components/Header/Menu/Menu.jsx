import { useContext } from 'react'
import styles from '../styles.module.scss'
import { SideBarContext } from '@/context/SideBarProvider'

function Menu({ content, href }) {
    const { menu } = styles
    const {setIsOpen,setType} = useContext(SideBarContext)

    const handleClickShowLogin = () => {
        if(content === 'Sign In') {
            setIsOpen(true)
            setType('login')
        }
    }
    return <div className={menu} onClick={() => handleClickShowLogin()}>{content}</div>
}

export default Menu
