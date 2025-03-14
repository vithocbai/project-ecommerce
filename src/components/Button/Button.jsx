import classNames from 'classnames'
import styles from './styles.module.scss'

function Button({ content, primary }) {
    const { btn } = styles
    return (
        <>
            <button
                type="button"
                className={classNames(
                    btn,
                    { [styles.primary]: true },
                    { [styles.default]: !primary }
                )}
            >
                {content}
            </button>
        </>
    )
}

export default Button
