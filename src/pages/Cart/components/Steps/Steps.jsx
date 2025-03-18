import Stepper from './Stepper/Stepper'
import styles from '../../styles.module.scss'
function Steps() {
    const { containerSteps, listSteps, desc } = styles
    const dataSteps = [
        {
            number: 1,
            content: 'Shopping cart'
        },
        {
            number: 2,
            content: 'Checkout'
        },
        {
            number: 3,
            content: 'Order status'
        }
    ]
    return (
        <div className={containerSteps}>
            <div className={listSteps}>
                {dataSteps.map((item, index) => {
                    return (
                        <Stepper
                            key={index}
                            number={item.number}
                            content={item.content}
                            isDisable={index != 0}
                        />
                    )
                })}
            </div>
            <div>
                <p className={desc}>
                    You are out of time! Checkout now to avoid losing your
                    order!
                </p>
            </div>
        </div>
    )
}

export default Steps
