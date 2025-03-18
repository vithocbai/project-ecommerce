import styles from '../styles.module.scss'
import cls from 'classnames'
function SelectBox({ option, getValue, w80, type }) {
    const { selectOption } = styles
    return (
        <select
            className={cls(
                selectOption,
                { [styles.w275]: !w80 },
                { [styles.w80]: w80 }
            )}
            onChange={(e) => {
                getValue(e.target.value, type)
            }}
        >
            {option.map((item, index) => {
                return (
                    <option key={index} value={item.value}>
                        {item.label}
                    </option>
                )
            })}
        </select>
    )
}

export default SelectBox
