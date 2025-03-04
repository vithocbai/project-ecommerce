import { useState } from 'react'
import styles from './styles.module.scss'
import { LiaEyeSolid } from 'react-icons/lia'
import { LiaEyeSlashSolid } from "react-icons/lia";

function InputCommon({ label, type, isRequred = false }) {
    const { formLogin, formLabel, boxInput, formInput, boxIcon } = styles
    const [isShowPass, setIsShowPass] = useState(false);
    const isPassword = type === 'password'
    const handleShowPass = () => {
        setIsShowPass(!isShowPass)
    }
    const isShowTextPass = isShowPass && isPassword ? 'text':type
    
    return (
        <form className={formLogin}>
            <div>
                <label htmlFor="" className={formLabel}>
                    {label} {isRequred && <span>*</span>}
                </label>
                <div className={boxInput}>
                    <input type={isShowTextPass} className={formInput} />
                    {isPassword && (
                        <div className={boxIcon} onClick={() => handleShowPass()}>
                            {isShowPass ? <LiaEyeSolid /> : <LiaEyeSlashSolid />}
                        </div>
                    )}
                </div>
            </div>

            
        </form>
    )
}

export default InputCommon
