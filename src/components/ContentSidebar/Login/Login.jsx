import InputCommon from '@components/InputCommon/InputCommon'
import styles from './styles.module.scss'
import { useState } from 'react'
import { useContext } from 'react'
import { ToastContext } from '@/context/ToastProvider'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { register, login, getInfo } from '@/apis/authServices'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { SideBarContext } from '@/context/SideBarProvider'
import { StoreContext } from '@/context/StoreProvider'

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
    const [isLoading, setIsLoading] = useState(false)
    const { toast } = useContext(ToastContext)
    const { setIsOpen, handGetListProductsCart } = useContext(SideBarContext)
    const { setUserId } = useContext(StoreContext)
    

    
    useEffect(() => {
        getInfo()
    }, [])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .required('Email is required ')
                .email('Invalid email'),
            password: Yup.string()
                .required('Password is required')
                .min(3, 'Password must be 3 charact'),
            confirmPassword: Yup.string().oneOf(
                [Yup.ref('password')],
                'Password must match'
            )
        }),

        onSubmit: async (values) => {
            if (isLoading) return

            setIsLoading(true)
            const { email: username, password } = values

            if (isRegister) {
                await register({ username, password })
                    .then((res) => {
                        toast.success(res.data.message)
                        setIsLoading(false)
                    })
                    .catch((err) => {
                        console.error('Register Error:', err.response?.data)
                        toast.error(
                            err.response?.data?.message || 'Registration failed'
                        )
                        setIsLoading(false)
                    })
            }

            if (!isRegister) {
                await login({ username, password })
                    .then((res) => {
                        // console.log('Login Success:', res.data) // Log để kiểm tra dữ liệu trả về
                        const { id, token, refreshToken } = res.data
                        setUserId(id)
                        Cookies.set('token', token)
                        Cookies.set('refreshToken', refreshToken)
                        Cookies.set('userId', id)
                        handGetListProductsCart(id, 'cart')
                        toast.success(
                            res.data?.message || 'Login successfully!'
                        )
                        setIsLoading(false)
                        setIsOpen(false)
                    })
                    .catch((err) => {
                        toast.error(
                            err.response?.data?.message || 'Login failed'
                        )
                        setIsLoading(false)
                    })
            }
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
                {formik.errors.email && formik.touched.email}
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
                        {isLoading
                            ? 'loading'
                            : isRegister
                            ? 'SIGN UP '
                            : 'LOGIN'}
                    </button>
                    <button
                        type="button"
                        onClick={() => handleToggle()}
                        className={submitForm}
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
