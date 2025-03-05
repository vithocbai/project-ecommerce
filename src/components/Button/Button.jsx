import classNames from 'classnames'
import styles from './styles.module.scss'

function Button({ content, primary }) {
    const { btn, actionLink } = styles
    return (
        <>
            <button className={classNames(btn, {[styles.primary] : true}, {[styles.default]: !primary})}>
                <a href="" className={actionLink}>
                    {content}
                </a>
            </button>
        </>
    )
}

export default Button
