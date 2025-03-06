import InputCommon from '@components/InputCommon/InputCommon'
import styles from './styles.module.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

function Login() {
    const {
        container,
        title,
        signIn,
        inputCheck,
        formLabel,
        submitForm,
        lostPass,
        lostPassLink
    } = styles

    const [isRegister, setIsRegister] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is Required')
                .min(6, 'Password must be at 6 characters'),
            confirmPassword: Yup.string()
                .required('Confirm Password is required')
                .oneOf([Yup.ref('password')], 'Passwords must match')
        }),
        onSubmit: (values) => {
            console.log('Form Data:', values)
        }
    })

    const handleToggle = () => {
        setIsRegister(!isRegister)
        formik.resetForm()
    }

    return (
        <div className={container}>
            <div className={title}>
                <a href="" className={signIn}>
                    {isRegister ? 'Sign Up' : 'Sign In'}
                </a>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id="email"
                    label="Username or email"
                    type="email"
                    isRequred
                    formik={formik}
                />

                <InputCommon
                    id="password"
                    label="Password "
                    type="password"
                    isRequred
                    formik={formik}
                />

                {isRegister && (
                    <InputCommon
                        id="confirmPassword"
                        label="ComfirmPassword "
                        type="password"
                        isRequred
                        formik={formik}
                    />
                )}

                <div>
                    <input type="checkbox" className={inputCheck} />
                    <label htmlFor="" className={formLabel}>
                        Remember me
                    </label>
                </div>

                <div style={{ height: '100%' }}>
                    <button className={submitForm} type="submit">
                        {isRegister ? 'SIGN UP' : 'LOGIN'}
                    </button>
                    <button
                        className={submitForm}
                        type="submit"
                        onClick={() => handleToggle()}
                    >
                        {isRegister
                            ? 'Already have an account'
                            : 'Don"t have an account'}
                    </button>
                </div>
            </form>

            <p className={lostPass}>
                <a href="" className={lostPassLink}>
                    {isRegister ? '' : ' Lost your password?'}
                </a>
            </p>
        </div>
    )
}
export default Login
