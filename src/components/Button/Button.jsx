import styles from './styles.module.scss'

function Button({ content }) {
    const { actionBtn, actionLink} = styles
    return (
        <>
            <button className={actionBtn}>
                <a href="" className={actionLink}>{content}</a>
            </button>
        </>
    )
}

export default Button
