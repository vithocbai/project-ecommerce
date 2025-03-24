import { useState } from 'react'
import styles from './styles.module.scss'
import { IoChevronDown } from 'react-icons/io5'
import { GrFormSubtract } from 'react-icons/gr'
import cls from 'classnames'

function Accordion() {
    const {
        container,
        infomation,
        title,
        titleActive,
        rowDesc,
        isVisibility,
        borderBottom
    } = styles
    const [isSelect, setIsSelect] = useState(false)

    const checkAccordion = () => {
        setIsSelect(!isSelect)
    }

    return (
        <div className={container}>
            <div className={infomation}>
                <div
                    className={cls(title, {
                        [titleActive]: isSelect,
                        [borderBottom]: !isSelect
                    })}
                    onClick={() => checkAccordion()}
                >
                    {isSelect ? <GrFormSubtract /> : <IoChevronDown />}
                    Additional information
                </div>

                <div
                    className={cls(rowDesc, borderBottom, {
                        [isVisibility]: isSelect
                    })}
                >
                    <div>Size ---- L, M , S</div>
                </div>
            </div>
        </div>
    )
}

export default Accordion
