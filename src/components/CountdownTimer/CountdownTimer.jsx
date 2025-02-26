import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const CountdownTimer = ({ targetDate }) => {
    const {box, date} = styles
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    function calculateTimeLeft() {
        const difference = +new Date(targetDate) - +new Date()
        let timeLeft = {}
        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Minutes: Math.floor((difference / (1000 * 60)) % 60),
                Seconds: Math.floor((difference / 1000) % 60)
            }
        }
        return timeLeft
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    })

    const formatNumber = (number) => {
        return String(number).padStart(2, '0')
    }

    const timeComponents = []

    Object.keys(timeLeft).forEach((interval) => {
        if (timeLeft[interval] !== undefined) {
            timeComponents.push(
                <span key={interval} className={box}>
                    {formatNumber(timeLeft[interval])} <span className={date}>{interval}</span> {' '}
                </span>
            )
        }
    })
    return timeComponents
}

export default CountdownTimer
