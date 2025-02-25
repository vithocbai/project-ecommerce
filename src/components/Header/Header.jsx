import BoxIcon from './BoxIcon/BoxIcon'
import { dataBoxIcons, dataMenu } from './constants'
import Menu from './Menu/Menu'
import styles from './styles.module.scss'
import logo from '@icons/images/logo.png'
import reLoad from '@icons/svgs/reLoadIcon.svg'
import heartIcon from '@icons/svgs/heartIcon.svg'
import cartIcon from '@icons/svgs/cartIcon.svg'

function MyHeader() {
    const {
        container,
        containerHeader,
        containerBox,
        containerBoxIcon,
        containerMenu,
        menu
    } = styles
    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcons.map((item) => {
                            return <BoxIcon type={item.type} href={item.href} />
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
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
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            )
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        <img src={reLoad} alt="" />
                        <img src={heartIcon} alt="" />
                        <img src={cartIcon} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MyHeader
