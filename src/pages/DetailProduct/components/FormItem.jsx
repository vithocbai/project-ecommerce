import { MdOutlineStar } from "react-icons/md";
import styles from '../styles.module.scss'

function FormItem({ label, typeChildren, isRequired }) {
    const {boxStar} = styles
    const reanderStar = (length) => {
        return Array.from({ length}, (_, index) => (
            <MdOutlineStar style={{ color: '#e1e1e1', fontSize: '22px' }} />
        ))
    }
    const renderTypeChildren = () => {
        switch (typeChildren) {
            case 'rating':
                return <div className={boxStar}>
                    <div>{reanderStar(1)}</div>
                    <div>{reanderStar(2)}</div>
                    <div>{reanderStar(3)}</div>
                    <div>{reanderStar(4)}</div>
                    <div>{reanderStar(5)}</div>
                </div>
            case 'input':
                return <input type="text" />
            case 'textarea':
                return <textarea rows="8" />
        }
    }
    return (
        <div>
            <label>
                {label} {isRequired && <span>*</span>}
            </label>
            <div>{renderTypeChildren()}</div>
        </div>
    )
}

export default FormItem
