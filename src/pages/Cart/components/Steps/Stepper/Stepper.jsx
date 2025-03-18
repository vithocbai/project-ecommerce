import styles from '../../../styles.module.scss'
import cls from 'classnames'

function Stepper({ number, content, isDisable }) {
    const { boxSteps, numberSteps, textSteps, isDisibleText, isDisibleNumber } =
        styles
    return (
        <div className={boxSteps}>
            <div className={cls(numberSteps, {[isDisibleNumber]: isDisable})}>
                {number}
            </div>
            <div className={cls(textSteps, {[isDisibleText]: isDisable})}>{content}</div>
        </div>
    )
}

export default Stepper
