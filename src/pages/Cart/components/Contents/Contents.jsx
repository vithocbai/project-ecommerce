import MainLayout from '@components/Layout/Layout'
import styles from '../../styles.module.scss'
import CartTable from './CartTable'

function Contents() {
    const { containerContent } = styles
    return (
        <>
            <MainLayout>
                <div className={containerContent}>
                    <CartTable />
                </div>
            </MainLayout>
        </>
    )
}

export default Contents
