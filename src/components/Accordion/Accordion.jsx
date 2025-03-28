import styles from './styles.module.scss'
import { IoChevronDown } from 'react-icons/io5'
import { GrFormSubtract } from 'react-icons/gr'
import { IoIosAdd } from 'react-icons/io'
import { RiSubtractFill } from 'react-icons/ri'
import cls from 'classnames'

function Accordion({
    titleMenu,
    contentMenu,
    onClick,
    isSelect,
    isIcon = false
}) {
    const {
        container,
        infomation,
        title,
        titleActive,
        rowDesc,
        isVisibility,
        borderBottom
    } = styles

    const checkAccordion = () => {
        onClick()
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
                    {isIcon ? (
                        isSelect ? (
                            <GrFormSubtract />
                        ) : (
                            <IoChevronDown />
                        )
                    ) : isSelect ? (
                        <IoIosAdd />
                    ) : (
                        <RiSubtractFill />
                    )}

                    {titleMenu}
                </div>

                <div
                    className={cls(rowDesc, borderBottom, {
                        [isVisibility]: isSelect
                    })}
                >
                    <div>{contentMenu}</div>
                </div>
            </div>
        </div>
    )
}

export default Accordion
