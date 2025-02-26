import styles from './styles.module.scss'

function Button({ content, size }) {
    const { actionBtn, actionLink} = styles
    return (
        <>
            <button className={`${actionBtn} ${styles[`actionBtn-${size}`]}`}>
                <a href="" className={actionLink}>{content}</a>
            </button>
        </>
    )
}

export default Button
