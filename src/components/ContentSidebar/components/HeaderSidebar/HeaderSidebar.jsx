import styles from './styles.module.scss'

function HeaderSidebar({ icons, title }) {
    const { container, contentTop} = styles
    return (
        <div className={container}>
            <a href="" className={contentTop}>
                <span>{icons}</span>
                <br />
                <span>{title}</span>
            </a>
        </div>
    )
}

export default HeaderSidebar
