import MyHeader from '@components/Header/Header'
import Banner from '@components/Banner/Banner'
import styles from './styles.module.scss'

function HomePage() {
    const { container } = styles
    return (
        <>
            <div className={container}>
                <MyHeader />
                <Banner />
            </div>
        </>
    )
}

export default HomePage
