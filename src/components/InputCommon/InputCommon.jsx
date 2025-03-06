import { useState } from 'react'
import styles from './styles.module.scss'
import { LiaEyeSolid } from 'react-icons/lia'
import { LiaEyeSlashSolid } from 'react-icons/lia'

function InputCommon({ label, type, isRequred = false, ...props }) {
    const { formik, id } = props
    const { container, formLabel, boxInput, formInput, boxIcon, errorMessage } =
        styles
    const [isShowPass, setIsShowPass] = useState(false)
    const isPassword = type === 'password'
    const handleShowPass = () => {
        setIsShowPass(!isShowPass)
    }
    const isShowTextPass = isShowPass && isPassword ? 'text' : type

    const isError = formik.errors[id] && formik.touched[id]
    const message = formik.errors[id]
    return (
        <div className={container}>
            <div>
                <label htmlFor="" className={formLabel}>
                    {label} {isRequred && <span>*</span>}
                </label>
                <div className={boxInput}>
                    <input
                        className={formInput}
                        type={isShowTextPass}
                        {...props}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values[id]}
        
                    />
                    {isPassword && (
                        <div
                            className={boxIcon}
                            onClick={() => handleShowPass()}
                        >
                            {isShowPass ? (
                                <LiaEyeSolid />
                            ) : (
                                <LiaEyeSlashSolid />
                            )}
                        </div>
                    )}
                    {isError && <div className={errorMessage}>{message}</div>}
                </div>
            </div>
        </div>
    )
}
export default InputCommon
