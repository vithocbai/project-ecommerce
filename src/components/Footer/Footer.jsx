import { dataMenu } from './constant'
import styles from './styles.module.scss'

function MyFooter() {
    const { container, navBox, link, pay, desc } = styles
    return (
        <div className={container}>
            <div>
                <img
                    style={{ width: '160px', height: '55px' }}
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png"
                    alt=""
                />
            </div>
            <ul className={navBox}>
                {dataMenu.map((data, index) => {
                    return (
                        <li key={index} style={{listStyle: "none"}}>
                            <a className={link} href="">
                                {data.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <div className={pay}>
                <p className={desc}>Guaranteed safe ckeckout</p>
                <img
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png"
                    alt=""
                />
            </div>
            <div>
                Copyright © 2025 XStore theme. Created by NGUYỄN ĐỨC HOÀNG – Lớp
                TT2D21 DHCN VIỆT TRÌ.
            </div>
        </div>
    )
}

export default MyFooter
