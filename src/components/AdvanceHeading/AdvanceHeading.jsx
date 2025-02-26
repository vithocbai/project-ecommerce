import MainLayout from '@components/Layout/Layout'
import styles from './styles.module.scss'

function AdvanceHeading() {
    const { container, desc, subHeading } = styles
    return (
        <>
            <MainLayout>
                <div className={container}>
                    <p className={desc}>don't miss super offers</p>
                    <h2 className={subHeading}>Our best products</h2>
                </div>
            </MainLayout>
        </>
    )
}

export default AdvanceHeading
