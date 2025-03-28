import styles from '../styles.module.scss'
import { IoHomeOutline } from 'react-icons/io5'
import { LuPhoneCall } from 'react-icons/lu'
import { AiOutlineClockCircle } from 'react-icons/ai'
import fbIcon from '@icons/svgs/fbIcon.svg'
import insIcon from '@icons/svgs/insIcon.svg'
import youIcon from '@icons/svgs/youIcon.svg'
import { FaTelegramPlane } from 'react-icons/fa'
import * as Yup from 'yup'
import { useFormik, Form, Field } from 'formik'

const ContactSection = () => {
    const formIk = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Please fill out this field.'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Please fill out this field.')
        }),
        onSubmit: (values) => {
            console.log('Form submitted:', values)
        }
    })

    return (
        <section className={styles.contactSection}>
            {/* Google Map */}
            <div className={styles.mapContainer}>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1693986272862!2d105.8567597!3d21.0259069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad8d08ec4881%3A0xfbf70488c3223a75!2zTWFzZXJhdGkgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1743131140930!5m2!1svi!2s"
                    className={styles.mapFrame}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            {/* Contact Information and Form */}
            <div className={styles.contactContent}>
                {/* Information Section */}
                <div className={styles.infoSection}>
                    <h3>Information</h3>
                    <div className={styles.line}></div>
                    <p>
                        <strong>
                            <IoHomeOutline /> Address
                        </strong>
                        7895 Piermont Dr NE Albuquerque, NM 198866
                    </p>
                    <p>
                        <strong>
                            <LuPhoneCall /> Phones
                        </strong>
                        +391 (0)35 2568 4593 hello@domain.com
                    </p>
                    <p>
                        <strong>
                            <AiOutlineClockCircle /> We're Open
                        </strong>
                        Every day 11am to 7pm
                    </p>
                    <div className={styles.socialIcons}>
                        <div className={styles.socialIcon}>
                            <img src={fbIcon} alt="" />
                        </div>
                        <div className={styles.socialIcon}>
                            <img src={insIcon} alt="" />
                        </div>
                        <div className={styles.socialIcon}>
                            <img src={youIcon} alt="" />
                        </div>
                        <div className={styles.socialIcon}>
                            <span>
                                <FaTelegramPlane style={{ color: '#fff' }} />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className={styles.formSection}>
                    <h3>Contact Us</h3>
                    <div className={styles.line}></div>
                    <p>
                        If you’ve got great products your looking to work with
                        us then drop us a line.
                    </p>
                    <form onSubmit={formIk.handleSubmit}>
                        <div className={styles.inputGroup}>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formIk.values.name}
                                    onChange={formIk.handleChange}
                                    onBlur={formIk.handleBlur}
                                    className={
                                        formIk.touched.name &&
                                        formIk.errors.name
                                            ? styles.inputError
                                            : ''
                                    }
                                />
                                {formIk.touched.name && formIk.errors.name && (
                                    <p className={styles.errorText}>
                                        {formIk.errors.name}
                                    </p>
                                )}
                            </div>

                            <div className={styles.inputWrapper}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formIk.values.email}
                                    onChange={formIk.handleChange}
                                    onBlur={formIk.handleBlur}
                                    className={
                                        formIk.touched.email &&
                                        formIk.errors.email
                                            ? styles.inputError
                                            : ''
                                    }
                                />
                                {formIk.touched.email &&
                                    formIk.errors.email && (
                                        <p className={styles.errorText}>
                                            {formIk.errors.email}
                                        </p>
                                    )}
                            </div>
                        </div>

                        <div className={styles.inputWrapper}>
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="7"
                                value={formIk.values.message}
                                onChange={formIk.handleChange}
                                onBlur={formIk.handleBlur}
                                className={
                                    formIk.touched.message &&
                                    formIk.errors.message
                                        ? styles.inputError
                                        : ''
                                }
                            ></textarea>
                        </div>
                        <button type="submit">Send Now</button>
                        {(formIk.errors.email ||
                            formIk.errors.name ||
                            formIk.errors.message) && (
                            <p className={styles.messageError}>
                                One or more fields have an error. Please check
                                and try again.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
