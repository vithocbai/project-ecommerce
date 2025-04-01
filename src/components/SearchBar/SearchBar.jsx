import { useContext } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { SideBarContext } from '@/context/SideBarProvider'
import { IoCloseOutline } from "react-icons/io5";
import Search from '@components/ContentSidebar/Search/Search'
import Login from '@components/ContentSidebar/Login/Login'

function SearchBar() {
    const { container, overlay, sidebar, slideSideBar, closeIcon } = styles
    const { showSearchBar, setShowSearchBar, type } = useContext(SideBarContext)
    const handleToggle = () => {
        setShowSearchBar(!showSearchBar)
    }

    const handleRenderContent = () => {
        switch (type) {
            case 'search':
                return <Search />
            default:
                return <Login />
        }
    }

    return (
        <div className={container}>
            <div
                className={classNames({ [overlay]: showSearchBar })}
                onClick={() => handleToggle()}
            ></div>
            <div
                className={classNames(sidebar, {
                    [slideSideBar]: showSearchBar
                })}
            >
                {showSearchBar && (
                    <div onClick={() => handleToggle()} className={closeIcon}>
                        <IoCloseOutline style={{ fontSize: '38px' }} />
                    </div>
                )}
                {handleRenderContent()}
            </div>
        </div>
    )
}

export default SearchBar
