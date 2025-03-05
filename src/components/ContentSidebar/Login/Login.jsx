import InputCommon from '@components/InputCommon/InputCommon'
import styles from './styles.module.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup'

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

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is Required')
                .min(6, 'Password must be at 6 characters')
        }),
        onSubmit: (values) => {
            console.log('Form Data:', values);
        }
    })

    return (
        <div className={container}>
            <div className={title}>
                <a href="" className={signIn}>
                    Sign In
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

                <div>
                    <input type="checkbox" className={inputCheck} />
                    <label htmlFor="" className={formLabel}>
                        Remember me
                    </label>
                </div>

                <div style={{ height: '40px'}}>
                    <button className={submitForm} type='submit'>
                        LOGIN
                    </button>
                </div>
            </form>

            <p className={lostPass}>
                <a href="" className={lostPassLink}>
                    Lost your password?
                </a>
            </p>
        </div>
    )
}
export default Login
