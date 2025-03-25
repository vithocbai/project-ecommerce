import styles from './styles.module.scss'
import { IoChevronDown } from 'react-icons/io5'
import { GrFormSubtract } from 'react-icons/gr'
import cls from 'classnames'
import InfomationProduct from '@/pages/DetailProduct/components/Infomation'

function Accordion({ titleMenu, contentMenu, onClick, isSelect }) {
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
                    {isSelect ? <GrFormSubtract /> : <IoChevronDown />}
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
