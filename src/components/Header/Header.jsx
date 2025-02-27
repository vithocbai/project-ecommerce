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
    } = styles
    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcons.map((data,item,) => {
                            return <BoxIcon key={item} type={data.type} href={data.href} />
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((data, item) => {
                            return (
                                <Menu  key={item} content={data.content} href={data.href} />
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
                        {dataMenu.slice(3, dataMenu.length).map((data, item) => {
                            return (
                                <Menu key={item} content={data.content} href={data.href} />
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
