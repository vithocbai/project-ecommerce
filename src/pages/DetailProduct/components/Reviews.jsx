import Button from '@components/Button/Button'
import styles from '../styles.module.scss'
import FormItem from '@/pages/DetailProduct/components/FormItem'

function ReviewsProduct() {
    const { reviewContent, title, desc, checkbox, submitBtn } = styles

    return (
        <div className={reviewContent}>
            <h3 className={title}>Reviews</h3>
            <p className={desc}>There are no reviews yet.</p>
            <h3 className={title}>Be the first to review “10K Yellow Gold”</h3>
            <p className={desc}>
                Be the first to review “10K Yellow Gold” Your email address will
                not be published. Required fields are marked
            </p>
            <form>
                {/* Rating */}
                <FormItem
                    label={'Your rating'}
                    isRequired={true}
                    typeChildren="rating"
                />

                {/* Review */}
                <FormItem
                    label={'Your review'}
                    isRequired={true}
                    typeChildren="textarea"
                />

                {/*formGroup  */}
                <FormItem
                    label={'Name'}
                    isRequired={true}
                    typeChildren="input"
                />

                <FormItem
                    label={'Email'}
                    isRequired={true}
                    typeChildren="input"
                />

                <div className={checkbox}>
                    <input type="checkbox" name="saveInfo" />
                    Save my name, email, and website in this browser for the
                    next time I comment.
                </div>
                <div className={submitBtn}>
                    <Button content="SUBMIT" primary />
                </div>
            </form>
        </div>
    )
}

export default ReviewsProduct
